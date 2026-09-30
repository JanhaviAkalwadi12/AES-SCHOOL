/**
 * Premium Masonry Gallery & Interactive Zoomable Lightbox Controller
 * Smt. Annapurna C. Hiremath English Medium Primary / High School
 */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryFilters();
  initLightbox();
});

let currentGalleryItems = [];
let currentLightboxIndex = 0;
let currentZoom = 1;

function initGalleryFilters() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!filterBtns.length || !galleryItems.length) return;

  currentGalleryItems = Array.from(galleryItems);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filter === 'all' || itemCategory === filter) {
          item.style.display = 'block';
          item.style.opacity = '1';
          item.classList.add('reveal-scale');
          setTimeout(() => item.classList.add('is-visible'), 50);
        } else {
          item.style.display = 'none';
          item.style.opacity = '0';
        }
      });

      // Update visible items for lightbox navigation
      currentGalleryItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const imgWrapper = lightbox.querySelector('.lightbox-img-wrapper');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const lightboxSubtext = lightbox.querySelector('.lightbox-subtext');
  const lightboxCounter = lightbox.querySelector('.lightbox-counter');
  
  const closeBtn = lightbox.querySelector('.lightbox-close-btn');
  const prevBtn = lightbox.querySelector('.lightbox-prev-btn');
  const nextBtn = lightbox.querySelector('.lightbox-next-btn');
  const zoomInBtn = lightbox.querySelector('.lightbox-zoom-in');
  const zoomOutBtn = lightbox.querySelector('.lightbox-zoom-out');
  const zoomResetBtn = lightbox.querySelector('.lightbox-zoom-reset');
  const fullscreenBtn = lightbox.querySelector('.lightbox-fullscreen');

  const updateZoom = () => {
    if (imgWrapper) {
      imgWrapper.style.transform = `scale(${currentZoom})`;
      if (currentZoom > 1) {
        imgWrapper.classList.add('zoomed');
      } else {
        imgWrapper.classList.remove('zoomed');
      }
    }
  };

  const resetZoom = () => {
    currentZoom = 1;
    updateZoom();
  };

  const openLightbox = (index) => {
    if (!currentGalleryItems.length) return;
    currentLightboxIndex = (index + currentGalleryItems.length) % currentGalleryItems.length;
    const item = currentGalleryItems[currentLightboxIndex];
    if (!item) return;

    resetZoom();

    const img = item.querySelector('.gallery-img') || item.querySelector('img');
    const title = item.querySelector('.gallery-title');
    const category = item.querySelector('.gallery-category');

    if (img && lightboxImg) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'School Gallery Photo';
    }

    if (lightboxCaption) {
      lightboxCaption.textContent = title ? title.textContent : 'Campus Gallery Photo';
    }

    if (lightboxSubtext) {
      const catText = category ? category.textContent : 'Campus Life';
      lightboxSubtext.textContent = `Category: ${catText} • Smt. Annapurna C. Hiremath School`;
    }

    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentGalleryItems.length}`;
    }

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    resetZoom();
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  };

  const showNext = () => {
    openLightbox(currentLightboxIndex + 1);
  };

  const showPrev = () => {
    openLightbox(currentLightboxIndex - 1);
  };

  // Attach click to gallery items
  document.addEventListener('click', (e) => {
    const galleryItem = e.target.closest('.gallery-item');
    if (galleryItem) {
      const index = currentGalleryItems.indexOf(galleryItem);
      if (index !== -1) {
        openLightbox(index);
      }
    }
  });

  // Zoom controls
  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentZoom < 3) {
        currentZoom += 0.35;
        updateZoom();
      }
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentZoom > 0.6) {
        currentZoom = Math.max(0.6, currentZoom - 0.35);
        updateZoom();
      }
    });
  }

  if (zoomResetBtn) {
    zoomResetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      resetZoom();
    });
  }

  // Toggle fullscreen
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!document.fullscreenElement) {
        lightbox.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
  }

  // Click on image to toggle zoom
  if (imgWrapper) {
    imgWrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentZoom === 1) {
        currentZoom = 1.8;
      } else {
        currentZoom = 1;
      }
      updateZoom();
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });

  // Close when clicking outside image viewport
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-viewport')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === '+' || e.key === '=') {
      if (currentZoom < 3) { currentZoom += 0.35; updateZoom(); }
    }
    if (e.key === '-' || e.key === '_') {
      if (currentZoom > 0.6) { currentZoom = Math.max(0.6, currentZoom - 0.35); updateZoom(); }
    }
    if (e.key === '0') resetZoom();
  });
}
