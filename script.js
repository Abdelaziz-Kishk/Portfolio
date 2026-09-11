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

// Track mouse movement for spotlight effect
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
});

// Create spotlight element dynamically
const spotlight = document.createElement('div');
spotlight.className = 'mouse-spotlight';
document.body.appendChild(spotlight);