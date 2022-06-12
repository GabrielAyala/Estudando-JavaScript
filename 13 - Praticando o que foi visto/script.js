const num = Number(prompt('Digite um numero'));
const numSelecionado = document.getElementById('num-Selecionado'); // Pegar um elemento do html pelo Id
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const numberOrNot = document.getElementById('NaN');
const praCima = document.getElementById('arredonda+');
const praBaixo = document.getElementById('arredonda-');
const quebrado = document.getElementById('float');

numSelecionado.innerHTML = num; // Armazenando o numero digitado e mostrando no html
raiz.innerHTML = `Raiz Quadrada: ${Math.sqrt(num)}`;
inteiro.innerHTML = `${num} é inteiro: ${Number.isInteger(num)}`;
numberOrNot.innerHTML = `É NaN: ${Number.isNaN(num)}`;
praBaixo.innerHTML = `Arredondando pra baixo: ${Math.floor(num)}`;
praCima.innerHTML = `Arredondando pra cima: ${Math.ceil(num)}`;
quebrado.innerHTML = `Com duas casas decimais: ${num.toFixed(2)}`; 
