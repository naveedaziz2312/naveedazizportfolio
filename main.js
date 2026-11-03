/**
 * ===================================================================
 * HAFIZ NAVEED AZIZ - MAIN JAVASCRIPT ENGINE
 * Handles: Animations, Filtering, Modal Previews, Contact & WhatsApp
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initTypewriter();
  initParticles();
  initCustomCursor();
  initScrollAnimations();
  initSkillBars();
  initProjects();
  initContactForm();
  initModalHandlers();
  initBackToTop();
});

/* ===================================================================
   1. NAVBAR & SCROLL PROGRESS
   =================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const scrollProgressBar = document.getElementById('scroll-progress');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Sticky background
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll progress bar
    if (scrollProgressBar) {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollY / height) * 100;
      scrollProgressBar.style.width = scrolled + '%';
    }

    // Active link highlighting
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });
}

/* ===================================================================
   2. MOBILE MENU DRAWER
   =================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuToggle || !mobileNav) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ===================================================================
   3. TYPEWRITER EFFECT
   =================================================================== */
function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  const words = [
    "Website & App Developer",
    "Restaurant Website Specialist",
    "E-Commerce Solutions Expert",
    "Flutter Mobile App Creator",
    "Custom Admin Panel Architect",
    "School & Academy LMS Builder"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at full word
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ===================================================================
   4. AMBIENT PARTICLES CANVAS
   =================================================================== */
function initParticles() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 25), 45);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = Math.random() * 1.8 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.alpha = Math.random() * 0.5 + 0.2;
      this.color = Math.random() > 0.5 ? '#00f0ff' : '#a855f7';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines if close
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = '#38bdf8';
          ctx.globalAlpha = (1 - dist / 110) * 0.12;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* ===================================================================
   5. CUSTOM CURSOR
   =================================================================== */
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.custom-cursor-follower');

  if (!cursor || !follower || window.innerWidth < 992) return;

  let mouseX = -100, mouseY = -100;
  let followerX = -100, followerY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function renderFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;

    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;

    requestAnimationFrame(renderFollower);
  }
  renderFollower();

  // Add hover effect over clickable elements
  const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .glass-card, .service-card, .project-card, .filter-btn');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ===================================================================
   6. SCROLL REVEAL ANIMATIONS
   =================================================================== */
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal-fade-up, .reveal-fade-in, .reveal-slide-left, .reveal-slide-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ===================================================================
   7. SKILL PROGRESS BARS ANIMATION
   =================================================================== */
function initSkillBars() {
  const skillSection = document.getElementById('skills');
  const skillBars = document.querySelectorAll('.skill-fill');

  if (!skillSection || skillBars.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillBars.forEach(bar => {
          const targetWidth = bar.getAttribute('data-width');
          if (targetWidth) {
            bar.style.width = targetWidth;
          }
        });
      }
    });
  }, { threshold: 0.25 });

  observer.observe(skillSection);
}

/* ===================================================================
   8. PROJECTS RENDERING & FILTERING
   =================================================================== */
function initProjects() {
  const container = document.getElementById('projects-container');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!container || typeof portfolioProjects === 'undefined') return;

  function renderProjects(category = 'all') {
    container.innerHTML = '';

    const filtered = category === 'all'
      ? portfolioProjects
      : portfolioProjects.filter(p => p.category === category);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
          <p style="font-size: 1.1rem; color: var(--text-muted);">
            No projects in this category yet. Check back soon or request a custom build!
          </p>
        </div>
      `;
      return;
    }

    filtered.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = 'project-card reveal-fade-up';
      card.style.transitionDelay = `${(idx % 3) * 0.15}s`;

      const tagsHtml = p.technologies
        .map(tech => `<span class="project-tag">${tech}</span>`)
        .join('');

      card.innerHTML = `
        <div class="project-thumb">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <span class="project-category-badge">${p.badgeCategory}</span>
          ${p.hasAdmin ? '<span class="project-admin-badge"><i class="fa-solid fa-lock"></i> Admin Panel</span>' : ''}
        </div>
        <div class="project-body">
          <div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.description}</p>
            <div class="project-tags">
              ${tagsHtml}
            </div>
          </div>
          <div class="project-actions">
            <button class="btn btn-secondary btn-sm btn-details" data-id="${p.id}">
              <i class="fa-solid fa-circle-info"></i> Details
            </button>
            <button class="btn btn-primary btn-sm btn-live-demo" data-id="${p.id}">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
            </button>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    // Re-bind click handlers for details and live demo buttons
    bindProjectCardButtons();

    // Trigger reveal observer for newly created elements
    setTimeout(() => {
      document.querySelectorAll('#projects-container .reveal-fade-up').forEach(el => {
        el.classList.add('reveal-active');
      });
    }, 50);
  }

  // Initial render
  renderProjects('all');

  // Filter button click event
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });
}

function bindProjectCardButtons() {
  document.querySelectorAll('.btn-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      const project = portfolioProjects.find(p => p.id === id);
      if (project) {
        openProjectModal(project);
      }
    });
  });

  document.querySelectorAll('.btn-live-demo').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      const project = portfolioProjects.find(p => p.id === id);
      if (project) {
        openLiveDemoModal(project);
      }
    });
  });
}

/* ===================================================================
   9. MODAL HANDLERS (Details, Demo & CV)
   =================================================================== */
function initModalHandlers() {
  const modalOverlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay || !closeBtn) return;

  closeBtn.addEventListener('click', () => closeModal());

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // CV Download Button
  const cvButtons = document.querySelectorAll('.btn-download-cv');
  cvButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCvModal();
    });
  });
}

function closeModal() {
  const modalOverlay = document.getElementById('modal-overlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openProjectModal(project) {
  const modalBody = document.getElementById('modal-body-content');
  const modalOverlay = document.getElementById('modal-overlay');
  if (!modalBody || !modalOverlay) return;

  const highlightsHtml = project.details.highlights
    .map(h => `<li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.6rem; color: var(--text-secondary);"><i class="fa-solid fa-circle-check" style="color: var(--cyan-400); margin-top: 0.25rem;"></i><span>${h}</span></li>`)
    .join('');

  const techHtml = project.technologies
    .map(t => `<span class="project-tag" style="background: rgba(56, 189, 248, 0.1); color: var(--cyan-400);">${t}</span>`)
    .join('');

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="project-category-badge" style="position: static; display: inline-block; margin-bottom: 0.75rem;">${project.badgeCategory}</span>
      <h2 style="font-size: 1.8rem; margin-bottom: 0.75rem; color: #fff;">${project.title}</h2>
      <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.6;">${project.description}</p>
    </div>

    <div style="border-radius: 16px; overflow: hidden; margin-bottom: 1.75rem; border: 1px solid var(--border-glass);">
      <img src="${project.image}" alt="${project.title}" style="width: 100%; height: auto;">
    </div>

    <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-glass); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.75rem;">
      <h4 style="font-size: 1.1rem; color: #fff; margin-bottom: 1rem;"><i class="fa-solid fa-star" style="color: #fbbf24;"></i> Key Architecture & Features:</h4>
      <ul style="list-style: none;">
        ${highlightsHtml}
      </ul>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="font-size: 0.95rem; color: var(--text-dim); text-transform: uppercase; margin-bottom: 0.75rem;">Technologies & Tools</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${techHtml}
      </div>
    </div>

    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="https://wa.me/923013986828?text=Assalam%20o%20Alaikum%20Hafiz%20Naveed%20Aziz,%20I%20am%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(project.title)}" target="_blank" class="btn btn-whatsapp" style="flex: 1;">
        <i class="fa-brands fa-whatsapp"></i> Order Similar Project
      </a>
      <button class="btn btn-secondary" onclick="closeModal()" style="flex: 1;">
        Close Preview
      </button>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openLiveDemoModal(project) {
  const modalBody = document.getElementById('modal-body-content');
  const modalOverlay = document.getElementById('modal-overlay');
  if (!modalBody || !modalOverlay) return;

  modalBody.innerHTML = `
    <div style="text-align: center; padding: 1rem 0;">
      <div style="width: 70px; height: 70px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid var(--cyan-400); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto; font-size: 2rem; color: var(--cyan-400);">
        <i class="fa-solid fa-laptop-code"></i>
      </div>
      <h2 style="font-size: 1.7rem; color: #fff; margin-bottom: 0.5rem;">${project.title}</h2>
      <p style="color: var(--text-muted); font-size: 1rem; max-width: 480px; margin: 0 auto 1.5rem auto;">
        Interactive Live Demonstration & Dedicated Admin Access Demo
      </p>

      <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem; text-align: left;">
        <p style="color: #34d399; font-weight: 600; font-size: 0.95rem; margin-bottom: 0.4rem;">
          <i class="fa-solid fa-lock-open"></i> Admin Panel Demo Credentials:
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.2rem;">
          <strong>Demo URL:</strong> /admin-preview-demo
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.2rem;">
          <strong>Username:</strong> demo_admin
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">
          <strong>Password:</strong> DemoPass@2026
        </p>
      </div>

      <div style="border-radius: 14px; overflow: hidden; margin-bottom: 1.75rem; border: 1px solid var(--border-glass);">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: auto;">
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="https://wa.me/923013986828?text=Hi%20Hafiz%20Naveed%20Aziz,%20I%20would%20like%20a%20live%20walkthrough%20of%20${encodeURIComponent(project.title)}" target="_blank" class="btn btn-whatsapp" style="flex: 1;">
          <i class="fa-brands fa-whatsapp"></i> Request Full Walkthrough
        </a>
        <button class="btn btn-secondary" onclick="closeModal()" style="flex: 1;">
          Close
        </button>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openCvModal() {
  const modalBody = document.getElementById('modal-body-content');
  const modalOverlay = document.getElementById('modal-overlay');
  if (!modalBody || !modalOverlay) return;

  modalBody.innerHTML = `
    <div style="text-align: center; padding: 0.5rem 0;">
      <div style="width: 75px; height: 75px; border-radius: 50%; background: var(--grad-primary); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto; font-size: 2rem; color: #070913; font-weight: 900;">
        HN
      </div>
      <h2 style="font-size: 1.85rem; color: #fff; margin-bottom: 0.25rem;">Hafiz Naveed Aziz</h2>
      <p style="color: var(--cyan-400); font-family: var(--font-mono); font-size: 0.95rem; margin-bottom: 1.5rem;">
        Website & App Developer • Contact: 03013986828
      </p>

      <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-glass); border-radius: 16px; padding: 1.5rem; text-align: left; margin-bottom: 1.5rem;">
        <h4 style="color: #fff; margin-bottom: 0.85rem; font-size: 1.1rem;"><i class="fa-solid fa-briefcase" style="color: var(--cyan-400);"></i> Professional Summary</h4>
        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1rem;">
          Specialized in building modern, high-converting, and mobile-friendly websites and cross-platform apps for restaurants, e-commerce stores, academies/schools, hotels, and local businesses to help them attract online customers and grow exponentially. Every website includes a clean, custom Admin Panel for complete independence.
        </p>

        <h4 style="color: #fff; margin-bottom: 0.85rem; font-size: 1.1rem;"><i class="fa-solid fa-code" style="color: var(--purple-500);"></i> Core Technical Competencies</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
          <span class="project-tag">HTML5 / CSS3 / Tailwind</span>
          <span class="project-tag">Modern JavaScript (ES6+)</span>
          <span class="project-tag">Flutter & Dart</span>
          <span class="project-tag">Supabase & Firebase</span>
          <span class="project-tag">Custom Admin Panels</span>
          <span class="project-tag">Restaurant Online Ordering</span>
          <span class="project-tag">WhatsApp API Integration</span>
          <span class="project-tag">Fast & Responsive UI</span>
        </div>

        <h4 style="color: #fff; margin-bottom: 0.85rem; font-size: 1.1rem;"><i class="fa-solid fa-phone" style="color: #10b981;"></i> Direct Contact Info</h4>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.25rem;">
          <strong>Phone & WhatsApp:</strong> 03013986828 (+92 301 3986828)
        </p>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.25rem;">
          <strong>Status:</strong> Available for Freelance & Long-term Contracts
        </p>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <button class="btn btn-primary" onclick="window.print()" style="flex: 1;">
          <i class="fa-solid fa-print"></i> Print / Save PDF
        </button>
        <a href="https://wa.me/923013986828?text=Assalam%20o%20Alaikum%20Hafiz%20Naveed%20Aziz,%20I%20viewed%20your%20CV%20and%20want%20to%20discuss%20a%20project" target="_blank" class="btn btn-whatsapp" style="flex: 1;">
          <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
        </a>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ===================================================================
   10. CONTACT FORM WITH WHATSAPP INTEGRATION
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const btnWhatsAppSend = document.getElementById('btn-send-whatsapp');

  if (!form) return;

  // Direct WhatsApp Forward Button
  if (btnWhatsAppSend) {
    btnWhatsAppSend.addEventListener('click', (e) => {
      e.preventDefault();
      sendViaWhatsApp();
    });
  }

  // Standard Form Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const service = document.getElementById('contact-service').value;
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !phone || !message) {
      showToast('Please fill in your Name, Phone Number, and Message.', 'info');
      return;
    }

    // Success feedback
    showToast(`Thank you, ${name}! Your inquiry has been recorded. Hafiz Naveed Aziz will contact you shortly on ${phone}.`, 'success');

    // Prompt to open WhatsApp for immediate response
    setTimeout(() => {
      const askWa = confirm("Inquiry submitted! Would you also like to open WhatsApp directly with Hafiz Naveed Aziz for immediate confirmation?");
      if (askWa) {
        sendViaWhatsApp();
      }
    }, 600);

    form.reset();
  });
}

function sendViaWhatsApp() {
  const name = document.getElementById('contact-name').value.trim() || 'Client';
  const email = document.getElementById('contact-email').value.trim() || 'Not specified';
  const phone = document.getElementById('contact-phone').value.trim() || 'Not specified';
  const service = document.getElementById('contact-service').value || 'Website / App Development';
  const budget = document.getElementById('contact-budget') ? document.getElementById('contact-budget').value : 'Not specified';
  const message = document.getElementById('contact-message').value.trim() || 'I want to discuss a new website/app project.';

  const waText = 
    `*Assalam o Alaikum Hafiz Naveed Aziz,*\n\n` +
    `*Project Inquiry Details:*\n` +
    `👤 *Name:* ${name}\n` +
    `📞 *Client Phone:* ${phone}\n` +
    `✉️ *Email:* ${email}\n` +
    `💼 *Service Required:* ${service}\n` +
    `💰 *Budget Range:* ${budget}\n\n` +
    `📝 *Project Description:*\n${message}\n\n` +
    `Looking forward to your quick response!`;

  const waUrl = `https://wa.me/923013986828?text=${encodeURIComponent(waText)}`;
  window.open(waUrl, '_blank');
}

/* ===================================================================
   11. TOAST NOTIFICATION UTILITY
   =================================================================== */
function showToast(message, type = 'info') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const iconClass = type === 'success' 
    ? 'fa-solid fa-circle-check' 
    : 'fa-solid fa-circle-info';

  toast.innerHTML = `
    <i class="${iconClass}"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  // Auto remove after 5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}

/* ===================================================================
   12. BACK TO TOP
   =================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
