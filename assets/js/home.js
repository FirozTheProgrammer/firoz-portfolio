const tabs = document.querySelectorAll('.tab-item');
const projectCards = document.querySelectorAll('.project-card');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-category');

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        projectCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.classList.add('visible');
                }, 100); // Delay to create the animation effect
            } else {
                card.classList.remove('visible');
                card.classList.add('hidden');
            }
        });
    });
});

// Initial load to show all project cards
projectCards.forEach(card => {
    card.classList.add('visible');
});