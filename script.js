const galleryNavigationdots = document.querySelector('.gallery_navigationdots');
const galleryNavigationdotsButton = document.querySelectorAll('.gallery_navigationdots_button');

const galleryImagesDiv = document.querySelectorAll('.gallery_images_div');

let selectedButtonIndex = 0;

for (let i = 0; i < galleryNavigationdotsButton.length; i++) {
    galleryNavigationdotsButton[i].addEventListener('click', function () {
        galleryNavigationdotsButton.forEach(button => button.classList.remove('selected-button'));
        galleryNavigationdotsButton[i].classList.add('selected-button');
        
        selectedButtonIndex = i;

        galleryImagesDiv.forEach(div => div.classList.remove('visibleImage'));
        galleryImagesDiv[i].classList.add('visibleImage')
    })
}



function rotationSelection() {
    galleryNavigationdotsButton.forEach(button => button.classList.remove('selected-button'));
    galleryImagesDiv.forEach(div => div.classList.remove('visibleImage'));


    galleryNavigationdotsButton[selectedButtonIndex].classList.add('selected-button');
    galleryImagesDiv[selectedButtonIndex].classList.add('visibleImage');

    selectedButtonIndex++;

    if (selectedButtonIndex >= galleryNavigationdotsButton.length) {
        selectedButtonIndex = 0;
    }
}

setInterval(rotationSelection, 8000);

// arrows 
const galleryArrowsDivleftarrow = document.querySelector('.gallery_arrows_divleftarrow');
const galleryArrowsDivrightarrow = document.querySelector('.gallery_arrows_divrightarrow');

galleryArrowsDivleftarrow.addEventListener('click', function () {
    clickArrows('left')
});
galleryArrowsDivrightarrow.addEventListener('click', function () {
    clickArrows('right')
});

function clickArrows(direction) {
    if (direction == 'left') {
        if (selectedButtonIndex == 0) {
            selectedButtonIndex = galleryNavigationdotsButton.length -1;
        } else {
            selectedButtonIndex--;
        }
    } else if (direction == 'right') {
        if (selectedButtonIndex == galleryNavigationdotsButton.length - 1) {
            selectedButtonIndex = 0;
        } else {
            selectedButtonIndex++;
        }
    }
    galleryNavigationdotsButton.forEach(button => button.classList.remove('selected-button'));
    galleryImagesDiv.forEach(div => div.classList.remove('visibleImage'));


    galleryNavigationdotsButton[selectedButtonIndex].classList.add('selected-button');
    galleryImagesDiv[selectedButtonIndex].classList.add('visibleImage');
}






