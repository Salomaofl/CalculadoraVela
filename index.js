// Aqui pegamos os dados dos inputs pelo ID de cada um
var campoGrama = document.getElementById("grama");
var campoML = document.getElementById("ml");
var resultado = document.querySelector("#Corpo h1");
var botaoCalcular = document.getElementById("calcular");
var botaoRecalcular = document.getElementById("recalcular");
var corpo = document.getElementById("Corpo");

// Aqui adicionei uma ação para o botao calcular
botaoCalcular.addEventListener("click", calcularResultado);

// Aqui adicionei uma ação para o botao recalcular
botaoRecalcular.addEventListener("click", resetar);

// Função para calcular o resultado
function calcularResultado() {
  // Obtendo os valores dos campos de entrada
  var grama = parseFloat(campoGrama.value);
  var ml = parseFloat(campoML.value);

  // Validando os valores de entrada
  if (isNaN(grama) || isNaN(ml) || grama <= 0 || ml <= 0 || ml > 100) {
    resultado.textContent = "Por favor, insira valores válidos.";
    return;
  }

  // Fazendo o cálculo
  var resultadoCalculado = (grama * ml) / 100;
  var vela = grama - resultadoCalculado;

  // Atualizando o texto do resultado na tag <h1>
  resultado.textContent = `Você vai precisar de: ${resultadoCalculado.toFixed(2)} gramas de essência e ${vela.toFixed(2)} gramas de cera.`;

  // Mostrando o botão de recalcular e ocultando o de calcular
  botaoCalcular.style.display = "none";
  botaoRecalcular.style.display = "block";
}

// Função para resetar os campos e girar o card
function resetar() {
  // Limpando os campos de entrada
  campoGrama.value = "";
  campoML.value = "";

  // Resetando o texto do resultado
  resultado.textContent = "Resultado:";

  // Mostrando o botão de calcular e ocultando o de recalcular
  botaoCalcular.style.display = "block";
  botaoRecalcular.style.display = "none";

  // Adicionando a classe rotating para o efeito de rotação
  corpo.classList.add("rotating");

  // Removendo a classe rotating após a animação
  setTimeout(() => {
    corpo.classList.remove("rotating");
  }, 600); // 600ms é a duração da transição definida no CSS
}
