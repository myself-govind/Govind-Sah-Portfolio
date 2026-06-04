/* ===== TYPING ANIMATION ===== */
const typingTexts = ['Web Developer', 'UI/UX Enthusiast', 'AI Learner', 'Problem Solver'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typingText');

function handleTyping() {
  const currentText = typingTexts[textIndex];

  if (!isDeleting) {
    typingEl.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(handleTyping, 1500);
      return;
    }
  } else {
    typingEl.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % typingTexts.length;
    }
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(handleTyping, speed);
}

handleTyping();

/* ===== FLOATING PARTICLES ===== */
const particleContainer = document.getElementById('particles');
const codeSnippets = ['</>', '{ }', '( )', '[ ]', '//', '=>', '&&', '||', '++', '==', 'fn', 'let', 'const', 'div', '< >', 'css', 'npm', 'git', 'api', 'jsx'];

for (let i = 0; i < 20; i++) {
  const particle = document.createElement('span');
  particle.className = 'particle';
  particle.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDuration = `${8 + Math.random() * 12}s`;
  particle.style.animationDelay = `${Math.random() * 10}s`;
  particleContainer.appendChild(particle);
}

/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section, .hero');

window.addEventListener('scroll', () => {
  // Navbar background
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active section
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === current) {
      link.classList.add('active');
    }
  });
});

/* ===== MOBILE MENU ===== */
const navToggle = document.getElementById('navToggle');
const navLinksContainer = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinksContainer.classList.toggle('open');
});

// Close menu on link click
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinksContainer.classList.remove('open');
  });
});

/* ===== SCROLL REVEAL ===== */
function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  const windowHeight = window.innerHeight;

  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('revealed');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* ===== CONTACT FORM ===== */
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;

    // Show success message
    const btnText = submitBtn.querySelector('.btn-text');
    const originalText = btnText.textContent;
    btnText.textContent = 'Message Sent!';
    submitBtn.style.background = '#16a34a';

    contactForm.reset();

    setTimeout(() => {
      btnText.textContent = originalText;
      submitBtn.style.background = '';
    }, 2500);
  }, 1500);
});

/* ===== SMOOTH SCROLL FOR ANCHOR LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
