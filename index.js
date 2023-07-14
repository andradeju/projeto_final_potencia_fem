// Variáveis globais
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

// Função para mostrar o slide atual
function showSlide() {
  // Oculta todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Exibe o slide atual
  slides[slideIndex].style.display = "flex";
}

// Função para avançar para o próximo slide
function nextSlide() {
  slideIndex++;
  // Volta ao primeiro slide se atingir o final
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

// Função para voltar ao slide anterior
function prevSlide() {
  slideIndex--;
  // Vai para o último slide se estiver no início
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

// Exibe o slide inicial ao carregar a página
showSlide();


function redirecionarQuiz() {
  window.location.href = "./quiz.html"
}