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
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]')
        const activeSlide = slides.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

// search bar toggle
const searchButton = document.querySelector('.navbar__search-svg');
const searchBar = document.querySelector('.navbar__search');
searchButton.addEventListener('click', () => {
    searchBar.style.display = 'flex';
})