const toggler = document.querySelector('.links .toggle-link');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active')
});

document.addEventListener('click', (e) =>{
    if(!toggler.contains(e.target)) {
        toggler.classList.remove('active');
    }
})

const underlineToggle = document.querySelectorAll('.underline-toggle');

underlineToggle.forEach((toggle => {
    toggle.addEventListener('mouseover', () => {
        underlineToggle.forEach((toggle =>{
            toggle.classList.remove('active');
        }))
        toggle.classList.add('active');
    })
}))


const faqToggle = document.querySelectorAll('.faq-toggle');

faqToggle.forEach((faq => {
    faq.addEventListener('click', () => {
        faqToggle.forEach((toggling => {
            toggling.classList.remove('active')
        }))
        faq.classList.add('active');
    })
}))

const barsToggle = document.querySelector('.navbar');

function showing() {
    barsToggle.classList.add('active');
}

function hiding() {
    barsToggle.classList.remove('active');
}