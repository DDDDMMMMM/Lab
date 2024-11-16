const buttons = document.querySelectorAll('.btn');

function resetButtonClasses() {
    buttons.forEach(button => {
        button.classList.remove('active'); 
    });
}
document.addEventListener('keydown', (event) => {
    resetButtonClasses();
    const key = event.key.toUpperCase();
    if (key === 'ENTER') {
        buttons.forEach(button => {
            if (button.textContent === 'Enter') {
                button.classList.add('active');
            }
        });
    } else {
    buttons.forEach(button => {
        if (button.textContent === key) {
            button.classList.add('active');

        }
    });
}
});