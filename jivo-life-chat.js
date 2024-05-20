const toggler = document.querySelector('.links .toggle-link');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active')
});

document.addEventListener('click', (e) =>{
    if(!toggler.contains(e.target)) {
        toggler.classList.remove('active');
    }
})


const container = document.querySelector('.flex-wrapper');

const content = container.querySelectorAll('.hide-show-wrapper');

const video = document.querySelectorAll('.editing');

content.forEach((con => {
    con.addEventListener('mouseover', () => {
        content.forEach((con => {
            con.classList.remove('active');
        }))
        con.classList.add('active');
        video.forEach((vid => {
            vid.classList.add('show');
        }))
    })
}))

const containing = document.querySelector('.form-wrapper');

function openButton() {
    containing.classList.add('active');
}

function closeButton() {
    containing.classList.remove('active');
}

const barsToggle = document.querySelector('.navbar');

function showing() {
    barsToggle.classList.add('active');
}

function hiding() {
    barsToggle.classList.remove('active');
}