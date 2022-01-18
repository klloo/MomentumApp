const images = [
    '0.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
];

const imageSize = images.length;
const chosenImage = images[Math.floor(Math.random() * imageSize)];

const bgImageSrc = `url('img/${chosenImage}')`;

document.body.style.backgroundImage = bgImageSrc;