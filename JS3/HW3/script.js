const images = document.querySelectorAll('img[data-src]');
const loadedWebpBtn = document.getElementById('load-webp-btn');

const loadImage = (image, isWebp = false) => {
    const src = isWebp ? image.dataset.srcWebp : image.dataset.src;
    image.src = src;

    image.addEventListener('load', () => {
        image.classList.add('loaded');
    })
};

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImage(entry.target);
            observer.unobserve(entry.target);
        }
    })
}, options);

images.forEach(image => observer.observe(image));

loadedWebpBtn.addEventListener('click', () => {
    images.forEach(image => {
        loadImage(image, true);
        observer.unobserve(image);
    })
})