const genres = {
    nature: [
        { url: 'https://via.placeholder.com/600x400?text=Nature+1', link: 'https://example.com/nature1' },
        { url: 'https://via.placeholder.com/600x400?text=Nature+2', link: 'https://example.com/nature2' },
        { url: 'https://via.placeholder.com/600x400?text=Nature+3', link: 'https://example.com/nature3' }
    ],
    city: [
        { url: 'https://via.placeholder.com/600x400?text=City+1', link: 'https://example.com/city1' },
        { url: 'https://via.placeholder.com/600x400?text=City+2', link: 'https://example.com/city2' },
        { url: 'https://via.placeholder.com/600x400?text=City+3', link: 'https://example.com/city3' }
    ],
    technology: [
        { url: 'https://via.placeholder.com/600x400?text=Technology+1', link: 'https://example.com/tech1' },
        { url: 'https://via.placeholder.com/600x400?text=Technology+2', link: 'https://example.com/tech2' },
        { url: 'https://via.placeholder.com/600x400?text=Technology+3', link: 'https://example.com/tech3' }
    ]
};

let currentGenre = 'nature';
let currentPhotoIndex = 0;

const photoElement = document.getElementById('photo');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const upButton = document.getElementById('up-button');

function showPhoto() {
    const photos = genres[currentGenre];
    photoElement.src = photos[currentPhotoIndex].url;
}

function showNextPhoto() {
    const photos = genres[currentGenre];
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto();
}

function changeGenre() {
    const genreKeys = Object.keys(genres);
    const currentIndex = genreKeys.indexOf(currentGenre);
    const nextGenreIndex = (currentIndex + 1) % genreKeys.length;
    currentGenre = genreKeys[nextGenreIndex];
    currentPhotoIndex = 0;
    showPhoto();
}

function openPhotoLink() {
    const photos = genres[currentGenre];
    const photo = photos[currentPhotoIndex];
    window.open(photo.link, '_blank');
}

function handleSwipe(event) {
    if (event.offsetDirection === Hammer.DIRECTION_RIGHT) {
        showNextPhoto();
    } else if (event.offsetDirection === Hammer.DIRECTION_LEFT) {
        changeGenre();
    } else if (event.offsetDirection === Hammer.DIRECTION_UP) {
        openPhotoLink();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showPhoto();
    
    // Initialize Hammer.js for swipe gestures
    const hammer = new Hammer(photoElement);
    hammer.on('swipe', handleSwipe);

    // Button event listeners
    prevButton.addEventListener('click', showNextPhoto);
    nextButton.addEventListener('click', changeGenre);
    upButton.addEventListener('click', openPhotoLink);
});
