function redirecionarHome() {
  window.location.href = "./index.html"
}

const questoes = [
  {
    questao: "Onde nasceu Sonia Guimarães?",
    respostas: [
      { texto: "São Paulo", correta: true },
      { texto: "Salvador", correta: false },
      { texto: "Rio de Janeiro", correta: false },
    ]
  },
  {
    questao: "Em que ano Sonia Guimarães se formou com licenciatura plena em ciências?",
    respostas: [
      { texto: "1979", correta: true },
      { texto: "1983", correta: false },
      { texto: "1986", correta: false },
    ]
  },
  {
    questao: "Em que área Sonia Guimarães é especialista?",
    respostas: [
      { texto: "Astronomia", correta: false },
      { texto: "Semicondutores", correta: true },
      { texto: "Biologia Marinha", correta: false },
    ]
  },
  {
    questao: "Qual foi o tema da dissertação de mestrado de Sonia Guimarães?",
    respostas: [
      { texto: "Desenvolvimento de Técnicas Fotográficas", correta: false },
      { texto: "Estudos de Microbiologia", correta: false },
      { texto: "Caracterização Ótica de Filmes Finos", correta: true },
    ]
  },
  {
    questao: "Quando Sonia Guimarães estava cursando a universidade, quantos alunos eram mulheres em sua sala?",
    respostas: [
      { texto: "45", correta: false },
      { texto: "10", correta: false },
      { texto: "5", correta: true },
    ]
  },
  {
    questao: "Qual foi o primeiro curso universitário que Sonia Guimarães escolheu inicialmente antes de optar por Física?",
    respostas: [
      { texto: "Matemática", correta: false },
      { texto: "Engenharia Civil", correta: true },
      { texto: "Química", correta: false },
    ]
  },
  {
    questao: "Além de ser professora, Sonia Guimarães também trabalha em projetos que envolvem estudantes de áreas carentes e marginalizadas. Em qual faculdade ela é mantenedora?",
    respostas: [
      { texto: "Faculdade Zumbi dos Palmares", correta: true },
      { texto: "Universidade Federal de São Carlos", correta: false },
      { texto: "Faculdade Capistrano de Abreu", correta: false },
    ]
  }
];

const questaoElemento = document.getElementById("questao");
const botoesResposta = document.getElementById("btns-resposta");
const botaoProxima = document.getElementById("prox-next");

let perguntaAtualIndex = 0;
let pontuacao = 0;

function iniciarQuiz(){
  resetarEstado();
  perguntaAtualIndex = 0;
  pontuacao = 0;
  botaoProxima.innerHTML = "Proxima";
  mostrarQuestao();
}

function mostrarQuestao(){
  resetarEstado();
  let perguntaAtual = questoes[perguntaAtualIndex];
  let questaoNao = perguntaAtualIndex + 1;
  questaoElemento.innerHTML = questaoNao + ". " + perguntaAtual.questao;

  perguntaAtual.respostas.forEach(resposta => {
    const botao = document.createElement("button");
    botao.innerHTML = resposta.texto;
    botao.classList.add("btn-resposta");
    botoesResposta.appendChild(botao);
    if(resposta.correta){
      botao.dataset.correta = resposta.correta;
    }
    botao.addEventListener("click", respostaSelecionada);
  });
}

function resetarEstado(){
  botaoProxima.style.display = "none";
  while(botoesResposta.firstChild){
    botoesResposta.removeChild(botoesResposta.firstChild);
  }
}

function respostaSelecionada(e){
  const botaoSelecionado = e.target;
  const correta = botaoSelecionado.dataset.correta === "true";

  if(correta){
    botaoSelecionado.classList.add("correta");
    pontuacao++;
  } else {
    botaoSelecionado.classList.add("incorreta");
  }
  Array.from(botoesResposta.children).forEach(button => {
    if(button.dataset.correta === "true"){
      button.classList.add("correta")
    }
    button.disabled =  true;
  });
  botaoProxima.style.display = "block";
}

function mostrarPontuacao(){
  resetarEstado();
  questaoElemento.innerHTML = `Você acertou ${pontuacao} de ${questoes.length}!`;
  botaoProxima.innerHTML = "Jogue de novo!";
  botaoProxima.style.display = "block";
}

function proximoBotao(){
  perguntaAtualIndex++;
  if(perguntaAtualIndex < questoes.length){
    mostrarQuestao();
  }else{
    mostrarPontuacao();
  }
}


botaoProxima.addEventListener("click", ()=> {
  if(perguntaAtualIndex < questoes.length){
    proximoBotao();
  }else{
    iniciarQuiz();
  }
});

iniciarQuiz();