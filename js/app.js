const cars = [
    {
        id: 'sedan',
        type: 'Sedans',
        description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
        imagePath: 'images/icon-sedans.svg',
    },
    {
        id: 'suv',
        type: 'SUVs',
        description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
        imagePath: 'images/icon-suvs.svg',
    },
    {
        id: 'luxury',
        type: 'Luxury',
        description: " Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
        imagePath: 'images/icon-luxury.svg'
    }
]

const renderHome = () => {
    const home = document.querySelector('.home')
    home.innerHTML = cars.map(car => {
        return (
            `<section class="${car.id}">
            <img src="${car.imagePath}" alt="">
            <h2>${car.type}</h2>
            <p>${car.description}<p>
            <a href="#" class="btn btn--${car.id}">Learn More</a>
            </section>`
        )
    }).join('');
}

renderHome();