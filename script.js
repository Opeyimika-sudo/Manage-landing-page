// Declaration of variables for navbar

const hamburger = document.querySelector('.header--hamburger');
const closehamburger = document.querySelector('.header--close');
const header = document.querySelector('.header');
const navbar = document.querySelector('.nav');
const navbarli = document.querySelector('.header__navbar__item')
const headerButton = document.querySelector('.header__button');

// Addition of event listener on click of hamburger to display nav
hamburger.addEventListener('click', () => {
    console.log("I am a fine boy");
    closehamburger.style.display = "inline-block";
    hamburger.style.display = "none";
    header.style.cssText = "min-height: 360px;"
    navbar.classList.replace('header__navbar', 'navbar');
})

// Addition of event listener on click of close button to remove nav
closehamburger.addEventListener('click', () => {
    console.log("I am a fine girl");
    hamburger.style.display = "inline-block";
    closehamburger.style.display = "none";
    navbar.classList.replace('navbar', 'header__navbar');
    header.style.cssText = "min-height: 0px;"
})

const testimonials = [document.querySelector('.testimonials__list__one'), 
document.querySelector('.testimonials__list__two'), document.querySelector('.testimonials__list__three'), document.querySelector('.testimonials__list__four')]

const circles = [document.querySelector('.testimonials__circle--one'), 
document.querySelector('.testimonials__circle--two'), document.querySelector('.testimonials__circle--three'),
document.querySelector('.testimonials__circle--four') 
]
circles[0].style.backgroundColor = "var(--primary-red)";

for (const circle of circles){
    circle.addEventListener('click', () => {
        const uncheckCircle = circles.map((item) => item.style.backgroundColor = "var(--gray)");
        const displayedTestimonial = testimonials.filter((item) => item.style.display = "block");
        const disappearTestimonial = displayedTestimonial.map((item) => item.style.display = 'none');
        circlePosition = circles.indexOf(circle);
    
        // On click, add a background-color to the one clicked
        circle.style.backgroundColor = "var(--primary-red)";
        // Connect circle to the respective testimonial
        testimonials[circlePosition].style.display = "block";
    });
}

