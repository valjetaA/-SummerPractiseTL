// ---------------Popup
const formOnElement = document.querySelectorAll('.open-form'),
formOffElement = document.querySelectorAll('.close-form'),
form = document.querySelector('.ordering'),
bgform = document.querySelector('.popup');

formOnElement.forEach(function(element) {
    element.addEventListener('click', () => {
        const id = requestAnimationFrame(popupOn);
        cancelAnimationFrame(id);
        return requestAnimationFrame(popupOn);
    })
});

function popupOn() {
    form.classList.add('popup_form-on');
    bgform.classList.add('popup_bg-on');
    form.classList.remove('popup_form-off');
    bgform.classList.remove('popup_bg-off');
}

formOffElement.forEach(function(element) {
    element.addEventListener('click', () => {
        const id = requestAnimationFrame(popupOff);
        cancelAnimationFrame(id);
        return requestAnimationFrame(popupOff);
    })
});

function popupOff() {
    form.classList.add('popup_form-off');
    bgform.classList.add('popup_bg-off');
    form.classList.remove('popup_form-on');
    bgform.classList.remove('popup_bg-on');
}

document.onkeydown = function (key) {
    if (key.code == "Escape") {
        popupOff();
    }
};

// ---------------Sliders

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}