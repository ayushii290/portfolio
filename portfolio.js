//javascript file //    // DOM ready + theme toggle + typing + contact form (kept behavior same)
document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------------
    // Theme toggle (button placed next to logo)
    // -----------------------------------------------------------------
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Load saved theme or default to dark-mode
    const saved = localStorage.getItem('theme') || 'dark-mode';
    document.body.className = saved;
    themeIcon.className = saved === 'dark-mode' ? 'fas fa-sun' : 'fas fa-moon';

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (document.body.classList.contains('dark-mode')) {
                document.body.classList.replace('dark-mode', 'light-mode');
                themeIcon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'light-mode');
            } else {
                document.body.classList.replace('light-mode', 'dark-mode');
                themeIcon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'dark-mode');
            }
        });
    }

    // -----------------------------------------------------------------
    // Typing effect (kept)
    // -----------------------------------------------------------------
    const textElement = document.getElementById('typing-text');
    const phrases = [
        "Software Engineer",
        "Full Stack Developer",
        "Python Developer",
        "Web Developer"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        if (!textElement) return;
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }
        textElement.textContent = currentPhrase.substring(0, charIndex);

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1400);
            return;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
        const speed = isDeleting ? 40 : 120;
        setTimeout(typeWriter, speed);
    }
    typeWriter();
});