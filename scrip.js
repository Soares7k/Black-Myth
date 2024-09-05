document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    });
});