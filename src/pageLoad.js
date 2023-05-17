import backgroundImg from './background.jpg';
import home from './tabs/home';
import './style.css';


const pageLoad = () => {
    const content = document.querySelector('.content');

    const background = new Image();
    background.src = backgroundImg;
    background.classList.add('background');
    content.appendChild(background);

    const container = document.createElement('div');
    container.classList.add('container');
    const heading = document.createElement('div');
    heading.classList.add('heading');
    const logo = document.createElement('div');
    logo.textContent = 'Riwayat';
    logo.classList.add('logo');
    const headline = document.createElement('div');
    headline.textContent = '...where taste meets tradition'
    headline.classList.add('headline');
    heading.appendChild(logo);
    heading.appendChild(headline);
    container.appendChild(heading);

    // const main = document.createElement('div');
    // main.classList.add('main');
    // main.textContent = 'The best desi food in town. Experience a wide-range of traditional food that your taste-buds will want you coming for more.';
    container.appendChild(home());

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = 'Copyright © github.com/hajra-javed';

    container.appendChild(footer);

    content.appendChild(container);


    const tabs = document.createElement('div');
    tabs.classList.add('tabs');

    const homeTab = document.createElement('div');
    homeTab.textContent = 'HOME'
    homeTab.classList.add('tab');
    homeTab.style.backgroundColor = 'white';
    const menuTab = document.createElement('div');
    menuTab.textContent = 'MENU'
    menuTab.classList.add('tab');
    const contactTab = document.createElement('div');
    contactTab.textContent = 'CONTACT'
    contactTab.classList.add('tab');

    tabs.appendChild(homeTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);

    content.appendChild(tabs);
};

export default pageLoad;