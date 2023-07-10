// Aqui pegamos os dados dos inputs pelo ID de cada um
var campoGrama = document.getElementById("grama");
var campoML = document.getElementById("ml");
var resultado = document.querySelector("#Corpo h1");
var botao = document.getElementById("calcular");

// Aqui adicionei uma ação para o botao
botao.addEventListener("click", calcularResultado);

// Função para calcular o resultado
function calcularResultado() {
  // Obtendo os valores dos campos de entrada
  var grama = campoGrama.value;
  var ml = campoML.value;

  // Fazendo o cálculo
  var resultadoCalculado = grama * ml/100;
  var vela = grama - ml;

  // Atualizando o texto do resultado na tag <h1>
  resultado.textContent = "Você vai precisar de: " + resultadoCalculado + " Gramas de essencia e " + vela + " Gramas de cera";
}


