import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const chromePaths = [
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];

let executablePath = '';
for (const p of chromePaths) {
  if (fs.existsSync(p)) {
    executablePath = p;
    break;
  }
}

if (!executablePath) {
  console.error('No compatible Chrome or Edge executable found.');
  process.exit(1);
}

console.log('Using browser executable:', executablePath);

const framesDir = path.resolve('record_frames');
if (fs.existsSync(framesDir)) {
  fs.rmSync(framesDir, { recursive: true, force: true });
}
fs.mkdirSync(framesDir, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    executablePath,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--window-size=1280,720'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1 });

  console.log('Navigating to http://localhost:3000/ ...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait extra 2 seconds for animations, fonts, images
  await new Promise(r => setTimeout(r, 2000));

  let frameCount = 0;
  async function capture(repeat = 1) {
    const frameBuffer = await page.screenshot({ type: 'jpeg', quality: 90 });
    for (let i = 0; i < repeat; i++) {
      const frameName = `frame_${String(frameCount).padStart(5, '0')}.jpg`;
      fs.writeFileSync(path.join(framesDir, frameName), frameBuffer);
      frameCount++;
    }
  }

  console.log('Starting preview recording...');

  // 1. Initial Hero view (stay for ~2.5 seconds = ~50 frames at 20fps)
  console.log('Recording Hero...');
  for (let i = 0; i < 25; i++) {
    await capture();
    await new Promise(r => setTimeout(r, 50));
  }

  // Get total scrollable height
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Total document height:', totalHeight);

  // 2. Smooth scrolling down the entire page
  const steps = 70;
  const maxScroll = totalHeight - 720;
  for (let i = 0; i <= steps; i++) {
    const y = Math.round((i / steps) * maxScroll);
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await new Promise(r => setTimeout(r, 60));
    await capture();
  }

  // Pause at footer for a moment
  console.log('Recording Footer...');
  for (let i = 0; i < 15; i++) {
    await capture();
    await new Promise(r => setTimeout(r, 50));
  }

  // 3. Smooth scroll back to services section
  console.log('Scrolling back to Services...');
  const servicesTop = await page.evaluate(() => {
    const el = document.getElementById('services');
    return el ? el.offsetTop : 800;
  });

  await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), servicesTop);
  await new Promise(r => setTimeout(r, 500));
  for (let i = 0; i < 15; i++) {
    await capture();
    await new Promise(r => setTimeout(r, 50));
  }

  // 4. Click a category tab (e.g. Hawan & Yagna) to showcase reactivity
  console.log('Clicking category tab...');
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const hawanBtn = buttons.find(b => b.textContent.includes('हवन'));
    if (hawanBtn) hawanBtn.click();
  });
  await new Promise(r => setTimeout(r, 500));
  for (let i = 0; i < 20; i++) {
    await capture();
    await new Promise(r => setTimeout(r, 50));
  }

  // 5. Scroll to top and open Booking Modal
  console.log('Opening Booking Modal...');
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await new Promise(r => setTimeout(r, 400));
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('button'));
    const bookBtn = buttons.find(b => b.textContent.includes('पूजा बुक करें'));
    if (bookBtn) bookBtn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  for (let i = 0; i < 25; i++) {
    await capture();
    await new Promise(r => setTimeout(r, 50));
  }

  await browser.close();
  console.log(`Captured ${frameCount} frames. Assembling video with ffmpeg...`);

  const outputVideo = path.resolve('ncr-panditji-full-preview.mp4');
  if (fs.existsSync(outputVideo)) {
    fs.unlinkSync(outputVideo);
  }

  // Compile video at 20 fps with high quality x264
  const ffmpegCmd = `ffmpeg -y -framerate 20 -i "${path.join(framesDir, 'frame_%05d.jpg')}" -c:v libx264 -pix_fmt yuv420p -crf 20 -preset fast "${outputVideo}"`;
  console.log('Running:', ffmpegCmd);
  execSync(ffmpegCmd, { stdio: 'inherit' });

  // Clean up frames directory to save disk space
  fs.rmSync(framesDir, { recursive: true, force: true });

  const stats = fs.statSync(outputVideo);
  console.log(`Video created successfully: ${outputVideo} (${(stats.size / (1024 * 1024)).toFixed(2)} MB)`);
}

run().catch((err) => {
  console.error('Error during recording:', err);
  process.exit(1);
});

