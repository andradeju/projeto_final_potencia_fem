let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function mostrarSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function prevSlide() {
  slideIndex--;
  mostrarSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  mostrarSlide(slideIndex);
}

mostrarSlide(slideIndex);

function redirecionarQuiz() {
  window.location.href = "./quiz.html"
}

