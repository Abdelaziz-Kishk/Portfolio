// Simple Smooth Scroll & Dynamic Nav Highlight
document.addEventListener('DOMContentLoaded', () => {
    console.log("Data Analyst Portfolio Loaded Successfully!");

    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.style.color = '#cbd5e1');
            e.target.style.color = '#38bdf8';
        });
    });
});