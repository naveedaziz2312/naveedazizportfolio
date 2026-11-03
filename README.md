# 🚀 Hafiz Naveed Aziz - Premium Developer Portfolio Website

A world-class, futuristic, ultra-modern personal developer portfolio website designed for **Hafiz Naveed Aziz** (Website & App Developer).

---

## 🌟 Highlights & Features

- **Personal Information Pre-Configured**:
  - **Name:** Hafiz Naveed Aziz
  - **Profession:** Website & App Developer
  - **Contact & WhatsApp:** `03013986828` (`+92 301 3986828`)
- **Business Specializations Highlighted**:
  1. 🍕 **Restaurant Websites** (Online Food Menu, WhatsApp 1-Click Ordering, Table Reservations & Admin Panel)
  2. 🛍️ **E-Commerce Stores** (Product Catalog, Shopping Cart, JazzCash/EasyPaisa/COD, Stock Control Admin)
  3. 🎓 **School & Academy LMS** (Online Admissions, Fee Challans/Vouchers, Attendance & Results Portal)
  4. 🏨 **Hotel & Business Websites** (Room Showcase, Booking Calendar Engine, Google Maps SEO)
  5. 📱 **Mobile App Development** (Cross-platform iOS & Android apps built with Flutter & Dart)
  6. ⚡ **Custom Admin Panels & Dashboards** (Complete control for business owners with zero coding needed)
- **High-Tech Aesthetic**:
  - Deep Navy/Black futuristic theme (`#070913`, `#0d1326`)
  - Electric Cyan (`#00f0ff`) and Vibrant Purple/Violet (`#8b5cf6`, `#a855f7`) gradient accents
  - Glassmorphic translucent cards with glowing border animations
  - Interactive ambient canvas with connected particles
  - Custom desktop cursor follower with magnetic hover effect
  - Top scroll progress indicator
  - Floating WhatsApp action beacon with live pulse effect and quick chat tooltip
  - Interactive project category filters (`All`, `Websites`, `Mobile Apps`, `UI/UX Designs`, `AI Projects`)
  - Project details & live demo interactive modal popups
  - Downloadable CV preview modal with instant print/PDF support
  - Contact form with instant WhatsApp message formatter and interactive feedback

---

## 📂 Project Directory Structure

```
the legend king/
│
├── index.html                 # Main website HTML file (semantic, SEO-ready)
│
├── css/
│   ├── style.css              # Core styling, variables, glassmorphism, responsive grid
│   └── animations.css         # Keyframes, glow pulses, reveal animations
│
├── js/
│   ├── projects-data.js       # All portfolio projects stored as clean editable data!
│   └── main.js                # Interactive logic (filtering, modal, typewriter, cursor, forms)
│
├── assets/
│   └── images/
│       ├── profile-avatar.svg         # Futuristic developer avatar
│       ├── project-restaurant.svg     # FoodieFlow restaurant UI preview
│       ├── project-ecommerce.svg      # ShopNest e-commerce UI preview
│       ├── project-school.svg         # EduSpark academy LMS UI preview
│       ├── project-hotel.svg          # GrandLuxe hotel booking UI preview
│       ├── project-flutter-app.svg    # QuickBite Flutter mobile app mockup
│       └── project-ai-dashboard.svg   # Nexus AI assistant dashboard preview
│
└── README.md                  # Documentation and user guide
```

---

## 🛠️ How to Customize Your Portfolio

### 1. How to Add or Change Projects
Open `js/projects-data.js` in any text editor (like VS Code or Notepad). You will see an array of projects:

```javascript
{
  id: "my-new-project",
  title: "Project Name Here",
  category: "websites", // "websites", "apps", "uiux", or "ai"
  badgeCategory: "Restaurant Website",
  hasAdmin: true,
  image: "assets/images/your-image.png",
  description: "Description of your project...",
  technologies: ["HTML5", "CSS3", "JavaScript", "Supabase"],
  liveDemoUrl: "https://your-live-link.com",
  sourceCodeUrl: "https://github.com/...",
  featured: true,
  details: {
    clientType: "Restaurant / Store / Client",
    role: "Lead Developer",
    duration: "2 Weeks",
    highlights: [
      "Feature 1...",
      "Feature 2...",
      "Feature 3..."
    ]
  }
}
```
Simply edit existing ones or copy and paste a new block!

### 2. How to Change Your Profile Picture
1. Save your photograph inside the `assets/images/` folder (e.g. `assets/images/my-photo.jpg`).
2. Open `index.html` and search for `assets/images/profile-avatar.svg`.
3. Replace `profile-avatar.svg` with `my-photo.jpg`.

### 3. How to Connect the Contact Form to Real Email
Currently, clicking **"Send via WhatsApp"** automatically converts the form into a pre-filled WhatsApp message sent to **03013986828**.

If you also want to receive email inquiries:
1. Go to [https://formspree.io](https://formspree.io) (Free) and create an endpoint.
2. In `index.html`, add `action="https://formspree.io/f/YOUR_ENDPOINT"` and `method="POST"` to `<form id="portfolio-contact-form">`.

---

## 🌐 How to Deploy Online for Free

### Option 1: GitHub Pages (Recommended)
1. Create a GitHub repository (e.g. `portfolio`).
2. Upload all files from this folder.
3. Go to **Settings > Pages > Branch: main > Save**.
4. Your website is live in 60 seconds with free HTTPS!

### Option 2: Netlify or Vercel
1. Go to [Netlify.com](https://netlify.com) or [Vercel.com](https://vercel.com).
2. Drag and drop this folder directly into their dashboard.
3. Your site is instantly published worldwide with a free custom URL.

---

© 2026 **Hafiz Naveed Aziz** — All rights reserved.
