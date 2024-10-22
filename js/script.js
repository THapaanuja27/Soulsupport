document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            // Toggle menu visibility
            navLinks.classList.toggle('show');
            // Toggle between the hamburger and close icon
            hamburger.classList.toggle('active');
        });
    }
});


document.querySelector('.process-button').addEventListener('click', function() {
    window.location.href = '#'; // Replace '#' with the URL or action you want the button to perform
});
