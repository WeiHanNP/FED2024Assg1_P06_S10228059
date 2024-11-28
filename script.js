// navagation bar below
// Select the element with the class "hamburger" and assign it to the variable mobileNav
const mobileNav = document.querySelector(".hamburger");

// Select the element with the class "menubar" and assign it to the variable navbar
const navbar = document.querySelector(".menubar");

// Define a function named toggleNav
const toggleNav = () => {
  // Toggle the "active" class on the navbar element
  navbar.classList.toggle("active");
  // Toggle the "hamburger-active" class on the mobileNav element
  mobileNav.classList.toggle("hamburger-active");
};
// Add a click event listener to the mobileNav element
// When the mobileNav element is clicked, the toggleNav function will be executed
mobileNav.addEventListener("click", () => toggleNav());
// nav bar on top


var movableHeader = document.getElementById("idx-header-h1");
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 0.80) {
    movableHeader.style.display = "none";
  } else {
    movableHeader.style.display = "block";
  }
});

//slideshows below
var slideshows = document.querySelectorAll('.mySlides'); // Get all mySlides
let slideIndex = 0;// Set the slide index to 0

const showSlides = () => { // Function to change the slide
  for (let i = 0; i < slideshows.length; i++) {// Loop through all the slides
    slideshows[i].style.display = "none";// Hide all the slides
  }
  slideIndex++;// Increase the slide index by 1
  if (slideIndex > slideshows.length) {
    slideIndex = 1;// Set the slide index to 1 if it's greater than the amount of slides
  }
  slideshows[slideIndex - 1].style.display = "block";// Display the current slide
  setTimeout(showSlides, 4000); // Change image every 4 seconds
};

showSlides();




//slideshows above
//homepage below

function blurbackground(){
  const blurDiv = document.querySelector(".blur");

  blurDiv.addEventListener("mouseover", () => {
    document.body.style.backdropFilter = "blur(7px)";
  });

  blurDiv.addEventListener("mouseout", () => {
    document.body.style.backdropFilter = "none";
  });
}
  
  





//album below
function albumPage(){
  let album = document.getElementsByClassName("album");
    for (i = 0; i < album.length; i++) {
      album[i].style.display = "none";  
    }
    album[0].style.display = "block";
  }


function changeAlbum(n){
  let i;
  let album = document.getElementsByClassName("album");
  for (i = 0; i < album.length; i++) {
    album[i].style.display = "none";  
  }
  album[n].style.display = "block";  
}


