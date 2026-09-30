/**
 * Accessibility & Inclusivity Toolbar + Campus Tour Hotspot Controller
 * Smt. Annapurna C. Hiremath English Medium Primary / High School
 */

document.addEventListener('DOMContentLoaded', () => {
  initA11yToolbar();
  initCampusTourHotspots();
});

function initA11yToolbar() {
  const a11yToggle = document.querySelector('.a11y-toggle-btn');
  const a11yPanel = document.getElementById('a11y-control-panel');
  const fontIncrease = document.getElementById('a11y-font-increase');
  const fontDecrease = document.getElementById('a11y-font-decrease');
  const fontReset = document.getElementById('a11y-font-reset');
  const contrastToggle = document.getElementById('a11y-contrast-toggle');
  const motionToggle = document.getElementById('a11y-motion-toggle');

  if (a11yToggle && a11yPanel) {
    a11yToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      a11yPanel.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!a11yPanel.contains(e.target) && e.target !== a11yToggle) {
        a11yPanel.classList.remove('active');
      }
    });
  }

  let currentFontSize = 100;

  if (fontIncrease) {
    fontIncrease.addEventListener('click', () => {
      if (currentFontSize < 130) {
        currentFontSize += 10;
        document.documentElement.style.fontSize = currentFontSize + '%';
      }
    });
  }

  if (fontDecrease) {
    fontDecrease.addEventListener('click', () => {
      if (currentFontSize > 80) {
        currentFontSize -= 10;
        document.documentElement.style.fontSize = currentFontSize + '%';
      }
    });
  }

  if (fontReset) {
    fontReset.addEventListener('click', () => {
      currentFontSize = 100;
      document.documentElement.style.fontSize = '100%';
      document.body.classList.remove('high-contrast');
    });
  }

  if (contrastToggle) {
    contrastToggle.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
    });
  }

  if (motionToggle) {
    motionToggle.addEventListener('click', () => {
      document.body.classList.toggle('reduce-motion');
    });
  }
}

// Interactive Campus Tour Hotspots & Zone Buttons Controller
function initCampusTourHotspots() {
  const hotspotPins = document.querySelectorAll('.hotspot-pin');
  const zoneBtns = document.querySelectorAll('.campus-zone-btn');
  const modal = document.querySelector('.hotspot-modal');
  const modalBadge = document.getElementById('hotspot-modal-badge');
  const modalTitle = document.getElementById('hotspot-modal-title');
  const modalDesc = document.getElementById('hotspot-modal-desc');
  const modalFeatures = document.getElementById('hotspot-modal-features');
  const modalClose = document.getElementById('hotspot-modal-close');
  const modalLink = document.getElementById('hotspot-modal-link');

  if (!hotspotPins.length || !modal) return;

  const activateHotspot = (pin) => {
    if (!pin) return;
    const id = pin.getAttribute('data-id');
    const title = pin.getAttribute('data-title');
    const desc = pin.getAttribute('data-desc');
    const badge = pin.getAttribute('data-badge') || 'Campus Facility';
    const features = pin.getAttribute('data-features');
    const link = pin.getAttribute('data-link') || 'pages/facilities.html';

    hotspotPins.forEach(p => p.classList.remove('active'));
    zoneBtns.forEach(b => {
      if (b.getAttribute('data-target') === id) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    pin.classList.add('active');

    if (modalBadge) modalBadge.textContent = badge;
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    if (modalLink) modalLink.setAttribute('href', link);

    if (modalFeatures && features) {
      const featList = features.split('|');
      modalFeatures.innerHTML = featList.map(item => `
        <div class="hotspot-feat-item"><span>✓</span> ${item.trim()}</div>
      `).join('');
    }

    modal.classList.add('active');
  };

  hotspotPins.forEach(pin => {
    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      activateHotspot(pin);
    });
  });

  zoneBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute('data-target');
      const targetPin = document.querySelector(`.hotspot-pin[data-id="${targetId}"]`);
      if (targetPin) {
        activateHotspot(targetPin);
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.stopPropagation();
      modal.classList.remove('active');
      hotspotPins.forEach(p => p.classList.remove('active'));
      zoneBtns.forEach(b => b.classList.remove('active'));
    });
  }

  document.addEventListener('click', (e) => {
    if (!modal.contains(e.target) && !e.target.closest('.hotspot-pin') && !e.target.closest('.campus-zone-btn')) {
      modal.classList.remove('active');
      hotspotPins.forEach(p => p.classList.remove('active'));
      zoneBtns.forEach(b => b.classList.remove('active'));
    }
  });
}
