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

const chatbotToggle = document.querySelectorAll('.chatbot-panel');

chatbotToggle.forEach((bot => {
    bot.addEventListener('click', () => {
        chatbotToggle.forEach((bot => {
            bot.classList.remove('active')
        }))
        bot.classList.add('active');
    })
}))

const barsToggle = document.querySelector('.navbar');

function showing() {
    barsToggle.classList.add('active');
}

function hiding() {
    barsToggle.classList.remove('active');
}