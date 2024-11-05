let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  if (n < 0) {
    slideIndex = slideIndex - 1;
    if (slideIndex < 1) {
      slideIndex = 4;
    }
  } else {
    slideIndex = slideIndex + 1;
    if (slideIndex > 4) {
      slideIndex = 1;
    }
  }
  showSlides(slideIndex);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
setInterval(() => {
  plusSlides(1);
}, 3000);