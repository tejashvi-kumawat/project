document.addEventListener('DOMContentLoaded', () => {
    const pendingBtn = document.getElementById('pending-btn');
    const completedBtn = document.getElementById('completed-btn');
    const cardsContainer = document.getElementById('cards-container');
    const pointsElement = document.getElementById('points');
    
    let cardsVisible = false;
    let currentView = 'none';

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

    pointsElement.innerText = completedTasks.length;

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
        if (currentView === 'pending') {
            cardsContainer.classList.add('cards-hidden');
            currentView = 'none';
        } else {
            displayCards(pendingTasks);
            currentView = 'pending';
        }
    });

    completedBtn.addEventListener('click', () => {
        if (currentView === 'completed') {
            cardsContainer.classList.add('cards-hidden');
            currentView = 'none';
        } else {
            displayCards(completedTasks);
            currentView = 'completed';
        }
    });

    const titleText = document.getElementById('title');
    const title = 'eDC Campus Ambassador Program';
    let index = 0;
    
    titleText.innerText = '';

    function typeWriter() {
        if (index < title.length) {
            titleText.innerHTML += title.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
});
