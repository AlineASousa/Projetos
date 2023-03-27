/*Programa para calcular o valor de uma viagem
*Variaveis:
*Preço do combustivel; Gasto médio de combustivel do *carro por km; Distância em KM da viagem;*/

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));