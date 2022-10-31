// mobile navigation menu
const mobileMenu = document.querySelector('.navbar__menu');
const toggleMobileMenu = document.querySelector('.navbar__mobile-toggle-svg');
const closeMobileMenu = document.querySelector('.navbar__mobile-close-btn');

// functionality for mobile menu
toggleMobileMenu.addEventListener('click', function() {
    mobileMenu.style.display = 'block';
})

// functionality for close button of mobile menu
closeMobileMenu.addEventListener('click', function() {
    mobileMenu.style.display = 'none';
})

// slideshow functionality
const buttons = document.querySelectorAll('[data-carousel-button]');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // carousel properties
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]')
        const activeSlide = slides.querySelector('[data-active]')

        // navigational dots properties
        const dots = button.closest('[data-carousel]').querySelector('[data-dots]')
        const activeDot = dots.querySelector('[data-dot-active]')

        // indexing slides and dots
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        // transition of slides
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active

        // transition of dots
        dots.children[newIndex].dataset.dotActive = true
        delete activeDot.dataset.dotActive
    })
})

// search bar toggle
const searchButton = document.querySelector('.navbar__search-svg');
const searchBar = document.querySelector('.navbar__search');
searchButton.addEventListener('click', () => {
    searchBar.style.display = 'flex';
    document.querySelector('.navbar__menu').style.zIndex = '20';
})

// mobile view footer expand/collapse fuctionality
const minusStyle = "margin-left: 4.5px; margin-top: 8px; width: 20px; height: 20px";
const plusStyle = "width: 30px;";
const footerButton1 = document.querySelector('#expand-list-1');
let footerButton1State = 0;
footerButton1.addEventListener('click', () => {
    if (!footerButton1State) {
        footerButton1State = 1;
        footerButton1.children[0].src = "/assets/images/minus.png"
        footerButton1.children[0].style.cssText = minusStyle
        document.querySelector('#list-1').style.display = 'block';
    } else {
        footerButton1State = 0;
        footerButton1.children[0].src = "/assets/images/plus.png"
        footerButton1.children[0].style.cssText = plusStyle
        document.querySelector('#list-1').style.display = 'none';
    }
})

const footerButton2 = document.querySelector('#expand-list-2');
let footerButton2State = 0;
footerButton2.addEventListener('click', () => {
    if (!footerButton2State) {
        footerButton2State = 1;
        footerButton2.children[0].src = "/assets/images/minus.png"
        footerButton2.children[0].style.cssText = minusStyle
        document.querySelector('#list-2').style.display = 'block';
    } else {
        footerButton2State = 0;
        footerButton2.children[0].src = "/assets/images/plus.png"
        footerButton2.children[0].style.cssText = plusStyle
        document.querySelector('#list-2').style.display = 'none';
    }
})

const footerButton3 = document.querySelector('#expand-list-3');
let footerButton3State = 0;
footerButton3.addEventListener('click', () => {
    if (!footerButton3State) {
        footerButton3State = 1;
        footerButton3.children[0].src = "/assets/images/minus.png"
        footerButton3.children[0].style.cssText = minusStyle
        document.querySelector('#list-3').style.display = 'block';
    } else {
        footerButton3State = 0;
        footerButton3.children[0].src = "/assets/images/plus.png"
        footerButton3.children[0].style.cssText = plusStyle
        document.querySelector('#list-3').style.display = 'none';
    }
})