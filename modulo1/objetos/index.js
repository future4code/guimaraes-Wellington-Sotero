

//Exercício de interpretação
//a) O que vai ser impresso no console?
//R: Matheus Nachtergaele
// Virginia Cavendish
//{canal: 'Globo', horario: '14h'}

//2)
//a) O que vai ser impresso no console?
//R: {nome: 'Juca', idade: 3, raca: 'SRD'}
//{nome: 'Juba', idade: 3, raca: 'SRD'}
//{nome: 'Jubo', idade: 3, raca: 'SRD'}

//b)Copia o códigi anterior

//3)
//a) O que será impresso no console?
//R: False e Undefined

//b) foi pedido que imprimisse no console o backender com valor false e não foi deninido nenhuma altura da pessoa.


// Exercício de escrita
//1. Resolva os passos a seguir:

//a) Crie um objeto. Ele deve conter duas propriedades: 
//nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
//Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:


const pessoa = {
nome: "Wellington" ,
apelidos: ["Leto","Well","Letão"]
}

const frase = `Me chamo ${pessoa.nome}, mas se quiser, pode me chamar de: ${pessoa.apelidos}`
console.log(frase)

// //1 B:

const pessoa1 = {
...pessoa,
apelidos: ["lindeza", "lindoca", "ali babá"]
}

const frase1 = `Me chamo ${pessoa1.nome}, mas se quiser, pode me chamar de: ${pessoa1.apelidos}`
console.log(frase1)


// EXERCÍCIO 2 A:

const objeto1 = {
nome: "Wellington",
idade: 34,
profissão: "Aux Pista"

}

const objeto2 = {
nome:"Gleika",
idade:30,
profissão: "Customer Success"

}

// // 2 B:

function objetos(objeto1){
const array = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissão, objeto1.profissão.length]
console.log(array)
return array
}

objetos(objeto1)
objetos(objeto2)



// Exercício 3 A:

let carrinho = []

// // 3 B:

let objeto1 = {nome: "Caqui", disponibilidade: true}
let objeto2 = {nome: "Melancia", disponibilidade: true}
let objeto3 = {nome: "Goiaba", disponibilidade: true}


// // 3 c:

function objetos(frutas){
carrinho.push(frutas)
}

objetos(objeto1)
objetos(objeto2)
objetos(objeto3)

// // 3 d:
console.log(carrinho)

