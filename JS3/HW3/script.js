// const images = document.querySelectorAll('img[data-src]');
// const loadedWebpBtn = document.getElementById('load-webp-btn');

// const loadImage = (image, isWebp = false) => {
//     const src = isWebp ? image.dataset.srcWebp : image.dataset.src;
//     image.src = src;

//     image.addEventListener('load', () => {
//         image.classList.add('loaded');
//     })
// };

// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.15
// };

// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             loadImage(entry.target);
//             observer.unobserve(entry.target);
//         }
//     })
// }, options);

// images.forEach(image => observer.observe(image));

// loadedWebpBtn.addEventListener('click', () => {
//     images.forEach(image => {
//         loadImage(image, true);
//         observer.unobserve(image);
//     })
// })


import { Chart } from 'chart.js';

// Отримуємо canvas елемент
const ctx = document.getElementById('myChart').getContext('2d');

// Створюємо графік
const myChart = new Chart(ctx, {
  type: 'bar', // Тип графіка: bar, line, pie тощо
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});