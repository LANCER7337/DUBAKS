// Основные сценарии для сайта DUBAKS
// Добавляет эффекты при прокрутке и плавное появление элементов

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  // Изменение фона навбара при прокрутке
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // IntersectionObserver для появления секций и карточек товаров
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll('.section').forEach((section) => {
    revealObserver.observe(section);
  });
  document.querySelectorAll('.product-card').forEach((card) => {
    revealObserver.observe(card);
  });
});