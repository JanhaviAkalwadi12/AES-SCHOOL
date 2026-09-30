/**
 * Events & Academic Calendar Filter Controller
 * Smt. Annapurna C. Hiremath English Medium Primary / High School
 */

document.addEventListener('DOMContentLoaded', () => {
  initEventFilters();
  initCalendarViewToggle();
});

function initEventFilters() {
  const filterTabs = document.querySelectorAll('.event-tab-btn');
  const eventCards = document.querySelectorAll('.event-card');

  if (!filterTabs.length || !eventCards.length) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterCategory = tab.getAttribute('data-category');

      eventCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          card.classList.add('reveal');
          setTimeout(() => card.classList.add('is-visible'), 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initCalendarViewToggle() {
  const viewToggleBtns = document.querySelectorAll('.calendar-view-btn');
  const listView = document.getElementById('events-list-view');
  const gridView = document.getElementById('events-grid-view');

  if (!viewToggleBtns.length || !listView) return;

  viewToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewToggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.getAttribute('data-view');
      if (mode === 'grid' && gridView) {
        listView.style.display = 'none';
        gridView.style.display = 'grid';
      } else {
        listView.style.display = 'flex';
        if (gridView) gridView.style.display = 'none';
      }
    });
  });
}
