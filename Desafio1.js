/*1- Programa para calcular o valor de uma viagem
*Variaveis:
*Preço do combustivel; Gasto médio de combustivel do *carro por km; Distância em KM da viagem;*/

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));

/*2- Programa para calcular o valor de uma viagem
*Variaveis:
*Preço do Etanol; Preço da gasolina; Tipo de *combustível; Gasto médio de combustivel do carro por *km; Distância em KM da viagem; (MAIS MELHORIAS)*/

const precoEtanol = 3.85;
const precoGasolina = 4.44;
let tipoCombustivel = '';

tipoCombustivel = prompt('Qual o tipo de combustível? (etanol ou gasolina)');

/*Verificando o tipo de combustível informado pelo usuário e calculando o valor total da viagem */

let valorCombustivel;
if (tipoCombustivel === 'etanol') {
  valorCombustivel = (distanciaKm / kmPorLitro) * precoEtanol;
} else if (tipoCombustivel === 'gasolina') {
  valorCombustivel = (distanciaKm / kmPorLitro) * precoGasolina;
} else {
  alert('Tipo de combustível inválido!');
}

/*Exibindo o resultado para o usuário, se o tipo de combustível informado for válido */
if (valorCombustivel) {
  alert('O valor total da viagem será de R$ ${valorCombustivel.toFixed(2)}.');
}