import pageLoad from "././pageLoad";
import home from './tabs/home';
import menu from './tabs/menu'
import contact from './tabs/contact';

pageLoad();

const tabs = document.querySelectorAll('.tab');

tabs[0].addEventListener('click', () => {
    const main = document.querySelector('.main');
    const parent = main.parentNode;
    parent.replaceChild(home(), main)
    tabs[0].style.backgroundColor = 'white';
    tabs[1].style.backgroundColor = 'inherit';
    tabs[2].style.backgroundColor = 'inherit';
});

tabs[1].addEventListener('click', () => {
    const main = document.querySelector('.main');
    const parent = main.parentNode;
    parent.replaceChild(menu(), main);
    tabs[1].style.backgroundColor = 'white';
    tabs[0].style.backgroundColor = 'inherit';
    tabs[2].style.backgroundColor = 'inherit';
});

tabs[2].addEventListener('click', () => {
    const main = document.querySelector('.main');
    const parent = main.parentNode;
    parent.replaceChild(contact(), main);
    tabs[2].style.backgroundColor = 'white';
    tabs[1].style.backgroundColor = 'inherit';
    tabs[0].style.backgroundColor = 'inherit';
});