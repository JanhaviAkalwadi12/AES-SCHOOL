/**
 * Interactive Parent FAQ Accordion Controller
 * Smt. Annapurna C. Hiremath English Medium Primary / High School
 */

document.addEventListener('DOMContentLoaded', () => {
  initFAQAccordion();
  initFAQSearch();
});

function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close other accordion items for clean accordion UX
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = (answer.scrollHeight + 30) + 'px';
      } else {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      }
    });
  });

  // Open first FAQ by default on desktop for friendly preview
  if (window.innerWidth > 768 && faqItems[0]) {
    const firstBtn = faqItems[0].querySelector('.faq-question-btn');
    const firstAns = faqItems[0].querySelector('.faq-answer');
    if (firstBtn && firstAns) {
      faqItems[0].classList.add('active');
      firstAns.style.maxHeight = (firstAns.scrollHeight + 30) + 'px';
    }
  }
}

function initFAQSearch() {
  const searchInput = document.getElementById('faq-search-input');
  const faqItems = document.querySelectorAll('.faq-item');

  if (!searchInput || !faqItems.length) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    faqItems.forEach(item => {
      const qText = item.querySelector('.faq-question-btn')?.textContent.toLowerCase() || '';
      const aText = item.querySelector('.faq-answer')?.textContent.toLowerCase() || '';

      if (!query || qText.includes(query) || aText.includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}
