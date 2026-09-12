document.addEventListener('DOMContentLoaded', () => {
    console.log("Data Analyst Portfolio Loaded Successfully!");

    // 1. Dynamic Nav Link Highlight on Click & Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = '#cbd5e1';
            if (link.getAttribute('href').includes(current)) {
                link.style.color = '#38bdf8';
            }
        });
    });

    // 2. Intersection Observer for Lovable Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active-reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cardsToAnimate = document.querySelectorAll('.skill-card, .project-card, .exp-card, .contact-card');
    cardsToAnimate.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        revealObserver.observe(card);
    });
});

// 3. Track Mouse Movement for Spotlight Effect
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
});

// 4. Create Spotlight Element Dynamically
const spotlight = document.createElement('div');
spotlight.className = 'mouse-spotlight';
document.body.appendChild(spotlight);