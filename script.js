const images = [
  'img/profile_pic.jpg',
  'img/intelligentia.JPG',
  'img/strawberry.JPG',
  // Add more images as needed
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
