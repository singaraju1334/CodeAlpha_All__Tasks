const images = Array.from({ length: 10 }, (_, i) => `images/img${i + 1}.jpg`);
let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const thumbnailsContainer = document.getElementById("thumbnails");

// Create thumbnails dynamically
images.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  img.onclick = () => setImage(index);
  thumbnailsContainer.appendChild(img);
});

const thumbnails = thumbnailsContainer.querySelectorAll("img");

function updateMainImage() {
  mainImage.style.opacity = 0;
  setTimeout(() => {
    mainImage.src = images[currentIndex];
    mainImage.style.opacity = 1;
  }, 200);

  thumbnails.forEach((thumb, idx) => {
    thumb.classList.toggle("active", idx === currentIndex);
  });
}

function setImage(index) {
  currentIndex = index;
  updateMainImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateMainImage();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateMainImage();
}

updateMainImage();
