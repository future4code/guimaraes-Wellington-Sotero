//-----Exercício de escrita 1-----\\

const frase1 = prompt("Qual seu nome?")
const frase2 = prompt("Qual seu e-mail?")
const frase3 = "seja bem vindo Wellington"
const frase4 = "seu email wellington_lbn@gmail.com foi cadastrado com sucesso!"

console.log(frase4)
console.log(frase3)

//-----Exercício de escrita 2-----\\

const comidasPreferidas = ['strogonoff', 'açaí', 'pastel', 'hot-dog', 'hamburger']


//A)

console.log(comidasPreferidas)


//B)

const frase = "Essas são minhas comidas preferidas"
const comida1 = "strogonoff"
const comida2 = "açaí"
const comida3 = "pastel"
const comida4 = "hot-dog"
const comida5 = "hamburger"

console.log(frase);
console.log(comida1);
console.log(comida2);
console.log(comida3);
console.log(comida4);
console.log(comida5);


//C) 


console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

comidasPreferidas[1] = prompt("Qual sua comida preferida?");

console.log(comidasPreferidas);

//-----Exercício de escrita 3-----\\

const listaDeTarefas = [];

const pergunta1 = prompt("Digite a primeira tarefa");
const pergunta2 = prompt("Digite a segunda tarefa");
const pergunta3 = prompt("Digite a terceira tarefa");

console.log(pergunta1, pergunta2, pergunta3);

listaDeTarefas.push(pergunta1, pergunta2, pergunta3);

console.log(listaDeTarefas);

const indice = prompt("Digite um indice: 0, 1 ou 2");

const indiceNumero = Number(indice);

console.log(indiceNumero);
