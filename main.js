const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})

const saTriggerMargin = 50;
const saElementList = document.querySelectorAll('.sa');

const saFunc = function() {
    for (const element of saElementList) {
        if (!element.classList.contains('show')) {
            if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
                element.classList.add('show');
            }
        }
    }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);