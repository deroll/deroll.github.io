let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let interval;

function updateCarousel() {
    slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

function nextSlide() { 
    currentSlide = (currentSlide + 1) % slides.length; 
    updateCarousel(); 
}

function prevSlide() { 
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
    updateCarousel(); 
}

function goToSlide(n) { 
    currentSlide = n; 
    updateCarousel(); 
}

interval = setInterval(nextSlide, 5000);

document.querySelector('.carousel').addEventListener('mouseenter', () => clearInterval(interval));
document.querySelector('.carousel').addEventListener('mouseleave', () => interval = setInterval(nextSlide, 5000));

let startX = 0;
document.querySelector('.carousel-container').addEventListener('touchstart', e => startX = e.touches[0].clientX);
document.querySelector('.carousel-container').addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) prevSlide();
});

function handleSubmit(event) {
    event.preventDefault();
    alert('Спасибо! Ваше сообщение отправлено. (Симуляция)');
    event.target.reset();
}

function scrollToContacts() { 
    document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' }); 
}

updateCarousel();
