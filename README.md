# 🕉️ NCR Pandit Ji (NCR पंडित जी) - Vedic Puja & Rituals Platform

A cutting-edge, high-performance, cross-platform Vedic Puja & Pandit Booking web application. Built using modern web technologies (**React 18 + Vite 6 + TypeScript + Tailwind CSS**), inspired by the structural elegance and reverence of [HawanGuru.com](https://hawanguru.com/) and integrating complete services and contact details from [NCR Pandit Ji](https://superlative-gnome-9a57e8.netlify.app/), powered by authentic photos, video, and brand identity from the client workspace.

---

## 🌟 Key Highlights & Modern Tech Specs

- **Cross-Platform Responsive Experience**: Flawlessly engineered for all screen sizes — Mobile, Tablet, Laptop, and 4K Desktop.
- **Bilingual Support (हिंदी / English)**: Instant one-click language toggle across the entire application with localStorage persistence.
- **Ultra-Fast & Optimized Loading**:
  - Vite 6 + ES Modules tree-shaking and chunking
  - Lightweight bundle size (~84 kB gzip JS, ~7.8 kB gzip CSS)
  - Lazy loading for images and video playback
- **Interactive Video Player & Photo Darshan**:
  - Custom responsive video player with sound toggle, loop, and fullscreen for the authentic ritual video (`puja-video-ritual.mp4`).
  - Lightbox modal for high-resolution images of floral rangolis, kalash sthapana, and Pandit Ji's ceremonies.
- **Dynamic Booking & Muhurat Calculator Modal**:
  - Step-by-step ceremony selection (Griha Pravesh, Rudrabhishek, Hawan, Vivah, etc.)
  - Date and time preference (Morning, Afternoon, Evening, or Auspicious Muhurat)
  - Location picker covering Noida, Greater Noida, Ghaziabad, Delhi, Gurugram, and Faridabad
  - Complete samagri assistance option
  - Auspicious celebratory flower confetti (`canvas-confetti`)
  - Direct 1-click WhatsApp message generation with pre-filled ceremony details
- **Mobile Sticky Action Bar**:
  - Instant One-Touch Call (`tel:9625057815`)
  - Direct WhatsApp Chat (`wa.me/919625057815`)
  - Quick "Book Puja" launcher
- **Search & Filterable Services**:
  - Real-time search across Hindi and English titles and descriptions
  - Category filters: All, Griha Pravesh & Vastu, Hawan & Yagna, Sanskars & Vivah, Katha & Path, Shiva & Special
- **SEO & Schema.org LocalBusiness Integration**:
  - Pre-configured JSON-LD structured data for Pandit booking in Delhi NCR
  - OpenGraph social media preview cards

---

## 📸 Integrated Client Media (from workspace)

| Asset File | Clean Name in `public/assets/` | Description |
|---|---|---|
| `WhatsApp Image 2026-11-05 at 10.35.33 PM.jpeg` | `ncr-panditji-logo.jpg` | Official Circular Brand Badge with ॐ, Trishul & Pandit Ji |
| `WhatsApp Image 2026-11-05 at 10.35.32 PM (1).jpeg` | `panditji-portrait.jpg` | Portrait of Acharya Pandit Ji in traditional white attire |
| `WhatsApp Image 2026-11-05 at 10.35.32 PM.jpeg` | `kalash-sthapana.jpg` | Sacred Kalash Sthapana & Marigold Flower Altar |
| `WhatsApp Image 2026-11-05 at 10.35.33 PM (1).jpeg` | `puja-ritual-home.jpg` | Pandit Ji in prayer before grand floral Shivling rangoli |
| `WhatsApp Image 2026-11-05 at 10.35.34 PM.jpeg` | `floral-rangoli-mandala.jpg` | Top-down aerial view of sacred flower mandala & prasad |
| `WhatsApp Video 2026-11-05 at 10.35.33 PM.mp4` | `puja-video-ritual.mp4` | Authentic ritual video with sacred Vedic chanting |

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** v18+ (tested with v22.14.0)
- **npm** v9+ (tested with v10.9.2)

### 2. Run the Development Server
```bash
npm run dev
```
The site will start at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Generates production-ready, minified static files in the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```

---

## 🏛️ Project Directory Structure

```text
panditji/
├── public/
│   └── assets/                     # Renamed & optimized media files
│       ├── floral-rangoli-mandala.jpg
│       ├── kalash-sthapana.jpg
│       ├── ncr-panditji-logo.jpg
│       ├── panditji-portrait.jpg
│       ├── puja-ritual-home.jpg
│       └── puja-video-ritual.mp4
├── src/
│   ├── components/
│   │   ├── BookingModal.tsx        # Dynamic booking modal with WhatsApp & confetti
│   │   ├── FAQSection.tsx          # Accordion FAQ
│   │   ├── Footer.tsx              # Vedic shlokas, footer links, contact info
│   │   ├── Hero.tsx                # Saffron & gold hero banner with live status
│   │   ├── MeetPanditJi.tsx        # Acharya profile, Gurukul credentials & quote
│   │   ├── Navbar.tsx              # Sticky header, language toggle & mobile menu
│   │   ├── QuickActionBar.tsx      # Mobile sticky bottom bar & desktop WhatsApp pill
│   │   ├── RitualDarshan.tsx       # Custom video player & lightbox photo gallery
│   │   ├── ServiceAreas.tsx        # Delhi NCR coverage grid with transit times
│   │   ├── ServicesSection.tsx     # Filterable & searchable 12 Vedic services
│   │   ├── TestimonialsSection.tsx # Verified client feedback from NCR societies
│   │   ├── TrustBar.tsx            # Credibility stats (1500+ pujas, 12+ years exp)
│   │   └── WhyChooseUs.tsx         # 6 core pillars of Vedic excellence
│   ├── data/
│   │   └── servicesData.ts         # Services, testimonials, FAQs, and contact config
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces and types
│   ├── App.tsx                     # Main application container
│   ├── index.css                   # Tailwind styles, spiritual gradients & scrollbar
│   └── main.tsx                    # React entry point
├── dist/                           # Compiled production build
├── index.html                      # SEO meta tags, Google Fonts, JSON-LD
├── package.json                    # Project configuration and dependencies
├── tailwind.config.js              # Custom Vedic color palette & animations
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite bundler configuration
```

---

## 📞 Direct Contact Configuration

- **Phone Number**: `+91 9625057815`
- **WhatsApp**: `https://wa.me/919625057815`
- **Service Areas**: Delhi, Noida, Greater Noida & West, Ghaziabad, Gurugram, Faridabad
- **Timing**: 6:00 AM – 10:00 PM (Everyday)

