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
        console.log(activeDot)
    })
})

// search bar toggle
const searchButton = document.querySelector('.navbar__search-svg');
const searchBar = document.querySelector('.navbar__search');
searchButton.addEventListener('click', () => {
    searchBar.style.display = 'flex';
})