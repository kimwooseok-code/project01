const images = ["0.jpeg", "1.jpg", "2.jpeg", "3.jpg", "4.jpg"];

const chosenImage = (images[Math.floor(Math.random() * images.length)]);

const bgImage = document.createElement("img");
 
bgImage.src = `img/${chosenImage}`; // html에서의 이미지 속성 추가와 같음.

document.body.appendChild(bgImage);