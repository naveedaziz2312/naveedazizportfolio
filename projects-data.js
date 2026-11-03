/**
 * ===================================================================
 * HAFIZ NAVEED AZIZ - PORTFOLIO PROJECTS DATA
 * ===================================================================
 * This file contains all projects shown in the portfolio.
 * You can easily edit, add, or remove projects here!
 */

const portfolioProjects = [
  {
    id: "foodieflow-restaurant",
    title: "FoodieFlow - Modern Restaurant & Ordering Platform",
    category: "websites",
    badgeCategory: "Restaurant Website",
    hasAdmin: true,
    image: "assets/images/project-restaurant.svg",
    description: "Full-featured restaurant web platform with online digital menu, automated table reservations, WhatsApp 1-click order dispatch, and a comprehensive real-time Admin Panel for managing kitchen tokens & live revenue.",
    technologies: ["HTML5", "CSS3 / Modern UI", "JavaScript ES6+", "Supabase", "WhatsApp API"],
    liveDemoUrl: "#",
    sourceCodeUrl: "#",
    featured: true,
    details: {
      clientType: "Restaurant & Food Chain",
      role: "Lead Full-Stack Developer",
      duration: "3 Weeks",
      highlights: [
        "Interactive food menu with search and categories (Burgers, Pizzas, Drinks, Combos)",
        "Automated WhatsApp order generation with order details, address, and kitchen token",
        "Powerful Admin Dashboard to add/remove dishes, change pricing, and monitor daily sales",
        "100% mobile-friendly responsive layout optimized for quick loading"
      ]
    }
  },
  {
    id: "shopnest-ecommerce",
    title: "ShopNest - High-Conversion E-Commerce & Inventory Store",
    category: "websites",
    badgeCategory: "E-Commerce",
    hasAdmin: true,
    image: "assets/images/project-ecommerce.svg",
    description: "High-speed modern e-commerce web application engineered for fashion and retail businesses. Features product filtering, shopping cart, JazzCash/EasyPaisa integration, and a centralized Admin Panel for stock management.",
    technologies: ["JavaScript ES6+", "Tailwind CSS", "Firebase", "Payment API", "REST API"],
    liveDemoUrl: "#",
    sourceCodeUrl: "#",
    featured: true,
    details: {
      clientType: "Retail & Online Fashion Brand",
      role: "Full-Stack Web Developer",
      duration: "4 Weeks",
      highlights: [
        "Dynamic shopping cart with persistent local storage & discount promo codes",
        "Complete Admin Panel for inventory control, low-stock alerts, and order status updates",
        "Optimized checkout flow reducing cart abandonment rates by 35%",
        "Instant customer notifications via WhatsApp & Email confirmation"
      ]
    }
  },
  {
    id: "eduspark-academy",
    title: "EduSpark - Academy & Student Management LMS Portal",
    category: "websites",
    badgeCategory: "School & Academy",
    hasAdmin: true,
    image: "assets/images/project-school.svg",
    description: "Comprehensive digital portal for coaching academies, schools, and educational institutes. Includes online admission applications, monthly fee voucher tracking, student attendance, and an administrative control suite.",
    technologies: ["HTML5 / CSS3", "JavaScript ES6+", "Supabase DB", "Chart.js", "PDF Generator"],
    liveDemoUrl: "#",
    sourceCodeUrl: "#",
    featured: true,
    details: {
      clientType: "Private Academy & College",
      role: "Web & Database Developer",
      duration: "3.5 Weeks",
      highlights: [
        "Student registration portal with automated downloadable PDF fee challan / voucher",
        "Teacher & Admin role-based logins with separate dashboard permissions",
        "Exam results publishing system with student roll number lookup",
        "SMS & WhatsApp integration for fee reminders to parents"
      ]
    }
  },
  {
    id: "grandluxe-hotel",
    title: "GrandLuxe - Luxury Hotel & Resort Booking Suite",
    category: "websites",
    badgeCategory: "Hotel & Business",
    hasAdmin: true,
    image: "assets/images/project-hotel.svg",
    description: "Premium hospitality and hotel booking website with interactive room showcases, calendar availability engine, Google Maps local SEO integration, and direct WhatsApp reservation alerts.",
    technologies: ["Modern JavaScript", "Glassmorphic CSS", "Leaflet Maps", "Firebase Realtime"],
    liveDemoUrl: "#",
    sourceCodeUrl: "#",
    featured: false,
    details: {
      clientType: "Hospitality & Boutique Hotel",
      role: "Frontend & UI/UX Developer",
      duration: "2.5 Weeks",
      highlights: [
        "Room showcase with amenities badges, virtual previews, and pricing tiers",
        "Direct WhatsApp instant booking engine for quick lead conversion",
        "Admin calendar matrix to mark rooms occupied or under maintenance",
        "Google My Business local SEO schema markup for top local rankings"
      ]
    }
  },
  {
    id: "quickbite-flutter-app",
    title: "QuickBite - Cross-Platform Food Delivery Mobile App",
    category: "apps",
    badgeCategory: "Mobile App (Flutter)",
    hasAdmin: true,
    image: "assets/images/project-flutter-app.svg",
    description: "Native 60fps mobile application for iOS and Android built using Flutter and Dart. Features real-time order tracking, Firebase push notifications, digital payment methods, and an admin sync dashboard.",
    technologies: ["Flutter", "Dart", "Firebase Firestore", "Google Maps SDK", "Riverpod"],
    liveDemoUrl: "#",
    sourceCodeUrl: "#",
    featured: true,
    details: {
      clientType: "Food Delivery Startup",
      role: "Mobile App Developer",
      duration: "5 Weeks",
      highlights: [
        "Single clean Dart codebase deployed to both Android APK and iOS targets",
        "Real-time driver location updates on interactive Google Maps",
        "Firebase Cloud Messaging (FCM) for instantaneous order status alerts",
        "Offline caching for instant screen loading even on slow 3G networks"
      ]
    }
  },
  {
    id: "nexus-ai-dashboard",
    title: "Nexus AI - Smart WhatsApp Business Bot & Growth Suite",
    category: "ai",
    badgeCategory: "AI Project",
    hasAdmin: true,
    image: "assets/images/project-ai-dashboard.svg",
    description: "Intelligent AI-powered assistant and customer conversation agent that connects with websites to handle 24/7 customer inquiries, table reservations, and automated order confirmations through WhatsApp.",
    technologies: ["JavaScript", "OpenAI API", "Webhooks", "Node.js Serverless", "Supabase"],
    liveDemoUrl: "#",
    sourceCodeUrl: "#",
    featured: false,
    details: {
      clientType: "Local Businesses & Restaurants",
      role: "AI & Full-Stack Developer",
      duration: "2 Weeks",
      highlights: [
        "Handles Urdu and English customer inquiries 24 hours a day with zero delay",
        "Automatically writes confirmed reservations and customer leads into the Admin Panel",
        "Interactive conversion analytics dashboard showing sales trends and customer volume",
        "Easy one-click toggle to pause AI or take over manually"
      ]
    }
  }
];
