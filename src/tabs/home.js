const home = () => {
    const main = document.createElement('div');
    main.classList.add('home', 'main');
    main.textContent = 'The best desi food in town. Experience a wide-range of traditional food that your taste-buds will want you coming for more.';
    return main;
};

export default home;