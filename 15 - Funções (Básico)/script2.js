//Função para somar dois numeros
function soma(x, y){
    const resultado = x + y;
    return resultado;
//Nada colocado em baixo do return sera executado
}

const resultado = soma();

console.log(resultado);

//Outras Maneiras de criar funções
//Função anonima -> são funções sem nome e são guardadas em uma variavel 
const raiz = function (n1) {
    return n1 ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//Arroy Function
const pot = (n) => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
