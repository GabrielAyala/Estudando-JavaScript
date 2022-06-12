let n1 = 5;//number
let n2 = 2.5;//number
let n3 = 15.2365489512

console.log(n1.toString() + n2); // number.toString = retorna o valor em string mas não transforma em string por definitivo

n1 = n1.toString(); //Transforma o valor em string em definitivo

console.log(n1.toString(2)); // retorna o valor da variavel em binario

console.log(n3.toFixed(2)); // escolhe quantas casas decimais vão aparecer e arredonda o numero

console.log(Number.isInteger(n1)); // vai retornar se o numero é inteiro ou não

let char = n1 * 'oi'
console.log(Number.isNaN(char)); // vai retornar se o valor n for um numero
