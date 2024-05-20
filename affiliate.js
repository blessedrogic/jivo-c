const toggler = document.querySelector('.links .toggle-link');

toggler.addEventListener('click', () => {
    toggler.classList.toggle('active')
});

document.addEventListener('click', (e) =>{
    if(!toggler.contains(e.target)) {
        toggler.classList.remove('active');
    }
})

const requiredToggle = document.querySelectorAll('.required .required-toggle');

requiredToggle.forEach((required => {
    required.addEventListener('click', () => {
        //requiredToggle.forEach((required => {
        //    required.classList.remove('active');
        //}))
        required.classList.toggle('active');
    })
}))