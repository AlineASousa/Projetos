/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Em três vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoOriginalProduto = 100
const debito = precoOriginalProduto * 0.10;
const dinheiro_Pix = precoOriginalProduto * 0.15;
const duasParcelas = precoOriginalProduto;
const tresParcelas = precoOriginalProduto * 0.10;
let metodoPagamento = '';

metodoPagamento = prompt('Qual o método de pagamento? (débito, dinheiro, pix, parcelar 2x ou parcelar 3x)');

if (metodoPagamento === 'débito') {
    console.log(precoOriginalProduto - debito);
} else if (metodoPagamento === 'dinheiro') {
    console.log(precoOriginalProduto - dinheiro_Pix);
} else if (metodoPagamento === 'pix') {
    console.log(precoOriginalProduto - dinheiro_Pix);
} else if (metodoPagamento === 'parcelar 2x') {
    console.log(precoOriginalProduto); 
} else if (metodoPagamento === 'parcelar 3x') {
    console.log(precoOriginalProduto + tresParcelas);
} else {
    alert('Método de pagamento inválido! Tente novamente.');
  }