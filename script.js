const body = document.body;
const header = document.getElementById('header');
const h2 = Array.from(document.getElementsByTagName('h2'));
const mainCard = Array.from(document.getElementsByClassName('main-card'));
const subCard = Array.from(document.getElementsByClassName('sub-card'));
const p = Array.from(document.getElementsByTagName('p'));
const span = Array.from(document.getElementsByTagName('span'));
const mainHeading = Array.from(document.getElementsByClassName('main-heading'));

const switchButton = document.getElementById('flexSwitchCheckDefault');

const elements = [body, header, h2, mainCard, subCard, p, span, mainHeading];

switchButton.addEventListener('click', () => {
    elements[0].classList.toggle('dark-mode');
    elements[1].classList.toggle('dark-mode');
    
    elements.forEach(element => {
        for (let i = 0; i < element.length; i++) {
            element[i].classList.toggle('dark-mode');
        }
    })
})
