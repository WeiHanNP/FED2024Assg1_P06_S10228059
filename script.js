// navagation bar below
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
// nav bar on top

//slideshows below
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//slideshows above

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