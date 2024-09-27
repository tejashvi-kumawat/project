document.addEventListener('DOMContentLoaded', () => {
    const pendingBtn = document.getElementById('pending-btn');
    const completedBtn = document.getElementById('completed-btn');
    const cardsContainer = document.getElementById('cards-container');

    const pendingTasks = [
        { title: 'Pending Task 1', description: 'Sample 1' },
        { title: 'Pending Task 2', description: 'Sample 2' },
        { title: 'Pending Task 3', description: 'Sample 3' },
        { title: 'Pending Task 4', description: 'Sample 4' },
        { title: 'Pending Task 5', description: 'Sample 5' }
    ];

    const completedTasks = [
        { title: 'Completed Task 1', description: 'Sample 1' },
        { title: 'Completed Task 2', description: 'Sample 2' },
        { title: 'Completed Task 3', description: 'Sample 3' },
        { title: 'Completed Task 4', description: 'Sample 4' },
        { title: 'Completed Task 5', description: 'Sample 5' }
    ];

    function displayCards(tasks) {
        cardsContainer.innerHTML = '';
        tasks.forEach(task => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<h3>${task.title}</h3><p>${task.description}</p>`;
            cardsContainer.appendChild(card);
        });
        cardsContainer.classList.remove('cards-hidden');
    }

    pendingBtn.addEventListener('click', () => {
        displayCards(pendingTasks);
    });

    completedBtn.addEventListener('click', () => {
        displayCards(completedTasks);
    });
});
