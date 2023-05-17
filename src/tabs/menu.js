const menu = () => {
    const items = [{
        name: 'Chicken Biryani',
        price: 500
    }, {
        name: 'Chicken Qorma',
        price: 1000
    }, {
        name: 'Beef Nihari',
        price: 1500
    }, {
        name: 'Hareesa',
        price: 1800
    }, {
        name: 'Chicken Biryani',
        price: 500
    }, {
        name: 'Chicken Qorma',
        price: 1000
    }, {
        name: 'Beef Nihari',
        price: 1500
    }, {
        name: 'Hareesa',
        price: 1800
    }, {
        name: 'Mutton Paye',
        price: 1500
    }];

    const main = document.createElement('div');
    main.classList.add('menu', 'main');

    items.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item');
        const itemName = document.createElement('div');
        itemName.classList.add('itemName');
        itemName.textContent = item.name;
        const itemPrice = document.createElement('div');
        itemPrice.classList.add('itemPrice');
        itemPrice.textContent = `Rs.${item.price}`;

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemPrice);
        main.appendChild(itemContainer);
    });
    return main;
}

export default menu;