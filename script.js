const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const destination = document.getElementById("destination").value;
    const travelDate = document.getElementById("travel-date").value;
    const travelers = document.getElementById("travelers").value;

    alert(`${travelers} ticket(s) for ${destination} on ${travelDate} have been booked successfully!`);
});