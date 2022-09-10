const images = [
    "images1.jpg",
    "images2.jpg",
    "images3.jpg",
    "images4.jpg",
    "images5.jpg",
    "images6.jpg",
    "images7.jpg",
    "images8.jpg",
    "images9.jpg",
    "images10.jpg",
    "images11.jpg"
];

const RandomPic = images[Math.ceil(Math.random() * images.length) - 1];
const createImgTag = document.createElement("img");
createImgTag.src = `img/${RandomPic}`;
document.body.appendChild(createImgTag);
