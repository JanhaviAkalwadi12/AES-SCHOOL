/**
 * Navigation & Menu Controller
 * Smt. Annapurna C. Hiremath English Medium Primary / High School
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyNavbar();
  initMobileMenu();
  highlightActiveLink();
});

// 1. Sticky Glassmorphism Header
function initStickyNavbar() {
  const navbar = document.querySelector('.navbar');
  const topBar = document.querySelector('.top-bar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar-scrolled');
      if (topBar) {
        topBar.style.maxHeight = '0px';
        topBar.style.opacity = '0';
        topBar.style.padding = '0';
        topBar.style.overflow = 'hidden';
      }
    } else {
      navbar.classList.remove('navbar-scrolled');
      if (topBar && window.innerWidth > 1024) {
        topBar.style.maxHeight = '50px';
        topBar.style.opacity = '1';
        topBar.style.padding = '6px 0';
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// 2. Mobile Menu Drawer & Dropdown Toggles
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.classList.toggle('menu-opened');
  });

  // Handle dropdown toggles on mobile
  navItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.nav-dropdown');

    if (dropdown && link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          item.classList.toggle('dropdown-open');
        }
      });
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.classList.remove('menu-opened');
    }
  });
}

// 3. Highlight Active Navigation Item
function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Check matching
    if (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html') || (currentPath.endsWith('/') && href === 'index.html')) {
      link.classList.add('active');
      const parentItem = link.closest('.nav-item');
      if (parentItem) {
        const topLink = parentItem.querySelector('.nav-link');
        if (topLink) topLink.classList.add('active');
      }
    }
  });
}
