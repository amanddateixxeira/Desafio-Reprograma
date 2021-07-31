 function calcularValorHora(){
var totalDeHorasTrabalhadas = horasTrabalhadasPorDia.value * 21; //TOTAL DE HORAS
var valorPorHora = (salario.value / totalDeHorasTrabalhadas).toFixed(2)

mostrarResultado.textContent = 'R$ ' + valorPorHora.replace(".", ",");

 }
 
var salario = document.querySelector('#ganho-mes'); //ENTRADA DE DADO 1
var horasTrabalhadasPorDia = document.querySelector('#horas-dia'); // ENTRADA DE DADO 2
var mostrarResultado = document.querySelector('#resposta');
 







//PASSO 1 = ENTRADA DE DADOS 1 = SALARIO =-------- <input id="" type="number" value="0" />

//PASSO 2 = ENTRADA DE DADOS 2 = HORAS TRABALHADAS ========= <input i=d"" type="number" value="0" />

//PASSO 3= CLICAR EM CALCULAR ======= <button onclick="calcularValorHora()">Calcular</button>

//PASSO 4 = CONTA //JAVASCRIPT

//PASSO 5 = MOSTRAR RESULTADO    ========== <span class="resposta">R$
