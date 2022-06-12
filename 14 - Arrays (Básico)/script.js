const alunos = ['Gabriel', 'Carol', 'Evelin']; //Arrays são indexados por elementos, Gabriel = elemento 1, Carol = elemento 2 e etc
console.log(alunos[0]); //Trazer apenas um elemento do array

alunos.push('Camila'); //Colocar um elemento no final do Array

console.log(alunos);

alunos.pop(); //Removendo o ultimo elemento do Array

const removido = alunos.pop(); //Salvando o que foi removido

alunos.shift(); //Removendo o primeiro elemento

delete alunos[1]; //Removendo um elemento em especifico

alunos.push(); //Adicionar Elementos no final do Array

alunos.slice(0, 3); //Mostrar elementos especificos do array
