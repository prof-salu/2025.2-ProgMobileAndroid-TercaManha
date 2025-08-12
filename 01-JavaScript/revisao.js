//Comentario de linha

/*
Comentario
de
bloco
*/

var nome1 = 'juca';     //variavel global (EVITAR O USO)
let nome2 = 'juca';     //variavel de escopo local
const nome3 = 'juca';   //constante de escopo local

//Imprimir mensagem no console
console.log('Nome1: ' + nome1);
console.log('Nome2: ' + nome2);
console.log('Nome3: ' + nome3);

//Funções
function somar(a, b){
    return a + b;
}

function somar2(a, b){
    let resultado = a + b;
    return resultado;
}

//Arrow functions
const multiplicar = (x, y) => x * y;

const multiplicar2 = (x, y) => {
    let resultado = x * y; 
    return resultado;
};

console.log((x,y) => x-y)


//Literais
let usuario = 'Ana';
let turma = 1002;

console.log('Olá ' + usuario + ', sua turma é ' + turma);
console.log(`Olá ${usuario}, sua turma é ${turma}`);

//Objetos
const pessoa = {
    nome : 'Carlos',
    idade : 30,
    cidade : 'Rio de Janeiro',
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);

//Desestruturação de objetos
const {nome, idade} = pessoa;

console.log(nome);

//Arrays
const frutas = ['Uva', 'Maçã', 'Banana', 'Morango'];
const[x,y] = frutas;
console.log(x);
console.log(y);

//Funções com arrays

const numeros = [1,2,3,4,5];

//map --> cria um novo array e executa uma função para cada elemento do array
const dobrados = numeros.map(num => num * 2);

console.log(dobrados);

//filter --> cria um novo array apenas com os valores que passam no teste
//const numeros = [1,2,3,4,5];

function impar(x){
    if (x % 2 != 0){
        return true;
    }else{
        return false;
    }
}

const impares2 = numeros.filter(impar);
const impares = numeros.filter(x => x % 2 != 0);

console.log(impares);

//find --> retorna o primeiro item do array

const alunos = ['Juca', 'Jose', 'Ana', 'Carla'];
const busca_ana = alunos.find( aluno => aluno === 'Ana');

console.log(busca_ana)

console.log( 2 == 2); //true (compara apenas o valor)
console.log( 2 == '2'); //true (compara apenas o valor)
console.log( 2 === '2'); //false (compara o valor e o tipo)

//Operadores Spread e rest
//Stread
const limpeza = ['Detergente', 'Esponja'];
const cereal = ['Arroz', 'Aveia']

const lista_compras2 = [...limpeza, 'ovos', ...cereal];
console.log(lista_compras)

//Rest --> agrupa o restante dos elementos em um unico array

function exibir_lista(item1, ...resto){
    console.log('Primeiro:' + item1);
    console.log('Restante: ' + resto);
}

exibir_lista('Carne', 'leite', 'Presunto', 'Feijão');