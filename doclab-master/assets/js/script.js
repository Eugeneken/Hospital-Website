'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 * 
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAVBAR
 * 
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER & BACK TOP BTN
 * 
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

function scrollToSection() {
  // Using JavaScript to scroll to the target section
  document.getElementById('targetSection').scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);


function scrollIntoView() {
  const element = document.getElementById(this.dataset.section);
  element.scrollIntoView({ behavior: "smooth" });
}

// Adding event listener to each button in data-section attribute
document .querySelectorAll(".btn--scroll").forEach((button) => { 
  button.addEventListener("click", scrollIntoView);
}
function addEventOnElements(){
  let elements=document.getElementsByClassName("element");
  for(var i=0 ; i<elements.length ; i++){
    elements[i]
    .addEventListener
}

function activeElementOnScroll(){
  const  sections = document.querySelectorAll('.section');
  var last_visible_section , current_h , max_height = 0 ;
  
  for(var i=0 ; i<sections.length ; i++ ){
     var el_height = sections[i].offsetHeight ;
     if( (current_h = sections[i].getBoundingClientRect().top ) < window.innerHeight &&
         current_h + el_height > window.innerHeight){ 
       if(el_height > max_height)
        last_visible_section = i;
     }
      else if(current_h > window.innerHeight)
          break ;
}
sections[last_visible_section].classList.add('active') ;
}
setInterval(activeElementOnScroll,150);


const  observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(!entry.isIntersecting) return ;
    document.querySelector('.nav__link--active').classList.remove('nav__link--active') ;
    entry.target.classList.add('nav__link--active') ;
  })
  },{rootMargin: '0px 0px -100px 0px'}) // root margin from top and bottom

let navLinks = document.querySelectorAll('.nav__link') ;
for(var i=0 ; i<navLinks.length ; i++)
  observer.observe(navLinks[i]) ; 