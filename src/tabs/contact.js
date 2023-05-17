const contact = () => {
    const main = document.createElement('div');
    main.classList.add('contact', 'main');
    const hours = section('Hours', ['Monday: 12:00 - 22:00', 'Tuesday: 12:00 - 22:00', 'Wednesday: 12:00 - 22:00', 'Thursday: 12:00 - 22:00', 'Friday: 12:00 - 23:30', 'Saturday: 12:00 - 23:30', 'Sunday: 12:00 - 23:30']);
    const address = section('Address', ['123 Street 10', 'DHA phase 12', 'Lahore, Pakistan.']);
    const contact = section('Contact Us', ['Tel: 123-456-7890', 'Email: riwayat@fakeemail.com']);
    main.appendChild(hours);
    main.appendChild(address);
    main.appendChild(contact);
    return main;
};

const section = (heading, details) => {
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('section');

    const headingDiv = document.createElement('div');
    headingDiv.classList.add('heading');
    headingDiv.textContent = heading;

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details');

    details.forEach(detail => {
        const detailDiv = document.createElement('div');
        detailDiv.classList.add('detail');
        detailDiv.textContent = detail;
        detailsDiv.appendChild(detailDiv);
    });

    sectionDiv.appendChild(headingDiv);
    sectionDiv.appendChild(detailsDiv);

    return sectionDiv;
}

export default contact;