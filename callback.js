const toggler = document.querySelector('.links .toggle-link');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active')
});

document.addEventListener('click', (e) =>{
    if(!toggler.contains(e.target)) {
        toggler.classList.remove('active');
    }
})

const container = document.querySelector('.form-wrapper');
 
function openButton() {
    container.classList.add('active');
}

function closeButton() {
    container.classList.remove('active');
}

const togglerContainer = document.querySelectorAll('.still-wrapper');

togglerContainer.forEach((container =>{
    container.addEventListener('click', () => {
        togglerContainer.forEach((container => {
        container.classList.remove('active');
    }))
        container.classList.add('active');
    })
}))

const barsToggle = document.querySelector('.navbar');

function showing() {
    barsToggle.classList.add('active');
}

function hiding() {
    barsToggle.classList.remove('active');
}