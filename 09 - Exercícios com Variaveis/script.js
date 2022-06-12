let A = 'A';
let B = 'B';
let C = 'C';

//Valor de A tenha o Valor de B, Valor de B ter Valor de C, Valor de C ter valor de A

//Modo 1
const getA = A;
const getB = B;
const getC = C;

A = getB;
B = getC;
C = getA;

console.log(A, B, C);
