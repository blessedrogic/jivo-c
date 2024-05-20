const toggler = document.querySelector('.links .toggle-link');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active')
});

document.addEventListener('click', (e) =>{
    if(!toggler.contains(e.target)) {
        toggler.classList.remove('active');
    }
})

const performing = document.querySelectorAll('.performing-toggle');

performing.forEach((perform => {
    perform.addEventListener('mouseover', () => {
        performing.forEach((perform => {
            perform.classList.remove('active');
        }))
        perform.classList.add('active');
    })
})) 

const barsToggle = document.querySelector('.navbar');

function showing() {
    barsToggle.classList.add('active');
}

function hiding() {
    barsToggle.classList.remove('active');
}