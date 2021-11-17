//const bool1 = true   CRIANDO A VARIAVEL bool1 e atribuindo o valor True
// const bool2 = false CRIANDO A VARIAVEL bool2 e atribuindo o valor false
// const bool3 = !bool2 CRIANDO A VARIAVEL bool3 e atribuindo o valor de negação na bool2

//let resultado = bool1 && bool2 criando a variavel resultado e verificando se 
//os valores atribudo para bool1 e bool2 são igais.
//console.log("a. ", resultado) mostrando o resultado no console  "a. " sendo false.


//resultado = bool1 && bool2 && bool3  o sersultado sera b. false... bool1 && bool2 = false
// e como bool2 recebeu false a negação de bool3 recebe treu sendo bool2 && bool3 = b. false. 

//const bool1 = true 
//const bool2 = false
//const bool3 = !bool2
//let resultado = '' AQUI INSERI UMA VARIAVEL resultado vazia para pegar o resultado la em baio
//resultado = !resultado && (bool1 || bool2)  Aqui o resultado sera treu por que apenas um sendo verdadeiro a resposta será verdadeira. c. true.
//console.log("c. ", resultado) mostrando o resultado no console  "c. " sendo true.

//console.log("d. ", typeof resultado) mostrando o resultado no console  "d. " sendo um string.

//let primeiroNumero = prompt("Digite um numero!") Aqui utilizando o promt para pegar o numero que o usuário digitar.
//let segundoNumero = prompt("Digite outro numero!") Aqui utilizando o promt para pegar o 2° numero que o usuário digitar.

//const soma = primeiroNumero + segundoNumero Aqui criamos a const soma fazendo ela receber os valores que o usuário digitou e somando os dois.

//console.log(soma) Aqui mostramos o resultado da soma dos Numeros que foi digitado. 





 let idadeUser = Number(prompt("Qual sua idade!"))
let idadeMelhorAmigo = Number(prompt("Qual é a idade do seu Melhor amigo!"))
console.log("Sua idade é maior do que a do seu melhor amigo?",idadeUser > idadeMelhorAmigo)
console.log("A diferença da idade é: ",idadeUser - idadeMelhorAmigo) 


 let numPar = Number(prompt("Digite um Número par!"))
console.log("O resto desse numero é: ", numPar%2) 

// o padrão que notei nos teste dos números é que sempre que for par o resto sera zero e quando for impar o resto será 1.
// Se o Usuário inserir um Número impar o resto final sempre sera 1.

 let idadeAnos = Number(prompt("Em que ano você Nasceu?"))
let anoAtual = 2021
let somaMeses = anoAtual - idadeAnos 
let mes = 12
let dia30 = 30
let dia31 = 31
let horas = 24
console.log("Sua idade em meses é: ",somaMeses * mes )
console.log("Sua idade em dias é: ",(somaMeses * mes / 2 * dia30)+(somaMeses * mes / 2 * dia31))
console.log("Sua idade em Horas é: ",(somaMeses * mes / 2 * dia30 * 24)+(somaMeses * mes / 2 * dia31 * 24) )

let numero1 = Number(prompt("Digite o 1° número"))
let numero2 = Number(prompt("Digite o 2° número"))


console.log("O primeiro numero é maior que segundo?",numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?",numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?",numero2 % numero1 == 0)
console.log("O segundo numero é divisível pelo primeiro?",numero1 % numero2 == 0)