// Countdown Timer
const weddingDate = new Date('February 7, 2026 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<p style="font-size: 2rem; margin-top: 40px;">The Big Day is Here! 🎉</p>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered delay for multiple items
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all elements with scroll animation classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
