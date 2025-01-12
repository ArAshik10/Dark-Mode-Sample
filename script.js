
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.querySelector('body')
    darkModeToggle.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');

    darkModeToggle.classList.toggle('dark-mode');
});
