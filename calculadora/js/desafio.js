function calcular(){
  var totalDeHorasTrabalhadas = horasTrabalhadasPorDia.value * 22; // Total de horas
  var valorPorHora = (meuPrecoPorhora.value / totalDeHorasTrabalhadas).toFixed(2)

  custoTotalDoProjeto.textContent = 'R$' + valorPorHora.replace(".", ",");

}

  var meuPrecoPorhora = document.querySelector('#valor-hora'); // Entrada de dados 1
  var horasTrabalhadasPorDia = document.querySelector('#horas-projeto'); //Entrada de dados 2
  var custoTotalDoProjeto = document.querySelector('#resposta'); // Restorno do custo total


//PASSO 1 = ENTRADA DE DADOS 1 <input type="number" id="valor-hora" />
//PASSO 2 = ENTRADA DE DADOS 2 <input type="number" id="horas-projeto" />
//PASSO 3 = CLICAR EM CALCULAR <button onclick="calcular()">Calcular Projeto</button> 
//PASSO 4 = CÁLCULO
//PASSO 5 = CUSTO TOTAL DO PROJETO <span id="resposta">Resposta</span>



//Obrigada por ter me ensinado tanto Keyla, para mim, finalmente fez LÓGICA!(Essa piada é pra você!). Obrigada.