document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const nums = entry.target.querySelectorAll('.counter-num');
        nums.forEach(el => animateNumber(el));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.7 });

  observer.observe(document.querySelector('.counter-section'));
});

function animateNumber(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix;
  const duration = 2500;  // Adjust speed
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current.toFixed(target % 1 ? 1 : 0) + suffix;
  }, 16);
}
