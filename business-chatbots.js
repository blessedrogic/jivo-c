const toggler = document.querySelector('.links .toggle-link');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active')
});

document.addEventListener('click', (e) =>{
    if(!toggler.contains(e.target)) {
        toggler.classList.remove('active');
    }
})

const containing = document.querySelector('.form-wrapper');

function openButton() {
    containing.classList.add('active');
}

function closeButton() {
    containing.classList.remove('active');
}

const toggleHeader = document.querySelectorAll('.toggling');


toggleHeader.forEach((toggle => {
    toggle.addEventListener('click', () => {
        toggleHeader.forEach((toggle => {
            toggle.classList.remove('active');
        }))
        toggle.classList.add('active');
    })
}))

const barsToggle = document.querySelector('.navbar');

function showing() {
    barsToggle.classList.add('active');
}

function hiding() {
    barsToggle.classList.remove('active');
} 