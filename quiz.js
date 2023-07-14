function redirecionarHome() {
  window.location.href = "./index.html"
}

function verificarRespostas() {
  const respostasCorretas = ["a", "c", "a"];
  const inputs = document.getElementsByTagName("input");
  
  let pontuacao = 0;

  for(let i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    if(input.checked && input.value === respostasCorretas[i]) {
      pontuacao++;
    }
  }
  alert(`Sua pontuação: ${pontuacao} / ${respostasCorretas.length}`);
}