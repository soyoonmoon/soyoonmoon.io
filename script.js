const images = [
  'img/profile_pic.jpg',
  'img/pride.png',
  'img/point.png',
  'img/eto.JPG',
  'img/pridee.PNG',
  'img/strawberry.JPG',
];

const imgElement = document.getElementById('main-photo');
let currentImageIndex = 0;

// Function to change the image
function changeImage() {
  imgElement.src = images[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % images.length; // Wrap around to the beginning
}

// Set an interval to change the image every second
setInterval(changeImage, 1000);
