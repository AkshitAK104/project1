const photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']; // Array of photo filenames
let currentIndex = 0;

function showPhoto(index) {
    const photoElement = document.getElementById('photo');
    photoElement.src = photos[index];
}

function showPrevPhoto() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : photos.length - 1;
    showPhoto(currentIndex);
}

function showNextPhoto() {
    currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1 : 0;
    showPhoto(currentIndex);
}

// Optional: Handle swipe gestures
let touchstartX = 0;
let touchendX = 0;

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchendX < touchstartX) {
        showNextPhoto();
    }
    if (touchendX > touchstartX) {
        showPrevPhoto();
    }
}
