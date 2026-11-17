/**
 * Auspicious Temple Bell sound synthesis using native browser Web Audio API.
 * No external audio files or network requests required.
 */
class TempleBellAudio {
  private ctx: AudioContext | null = null;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public ring() {
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Authentic temple bell harmonic frequencies
      const harmonics = [
        { freq: 587.33, gain: 0.7, decay: 3.2 },  // D5 fundamental
        { freq: 1174.66, gain: 0.5, decay: 2.8 }, // D6 octave
        { freq: 1760.00, gain: 0.35, decay: 2.2 },// A6 fifth
        { freq: 2349.32, gain: 0.25, decay: 1.8 },// D7
        { freq: 3520.00, gain: 0.15, decay: 1.2 },// A7
      ];

      harmonics.forEach(({ freq, gain, decay }) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(gain, now + 0.015);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + decay + 0.1);
      });
    } catch (_) {
      // Audio not supported or blocked by autoplay policy
    }
  }
}

export const templeBell = new TempleBellAudio();

