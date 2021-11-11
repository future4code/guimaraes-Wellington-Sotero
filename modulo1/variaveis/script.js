/*1. Analise o programa abaixo e diga o que será impresso no console, 
**SEM EXECUTAR o programa.**

let a = 10          a variavel a está recebendo o vaor 10 assim como a variavel b, No entanto
                    no console.log esta chamando so o (b) de inicio. assim aparecendo primeiro o valor 10

let b = 10

console.log(b)

b = 5               Já aqui a variavel b  deixa de ser 10 e passa a ser 5 assim chamando do console,log
                    as variaveis (a, b) sendo assim aparecerá 10 5 no console.
console.log(a, b)
*/
    
 /*  2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    
    let a = 10     a variavel (a) recebe o valor 10
    let b = 20     a variavel (b) recebe o valor 10
    c = a       Aqui (c) recebe o valor de a que é 10
    b = c       b recebe o valor de (c) que recebeu o valor de (a) assim também ficando 10
    a = b       a recebe valor de (b) que acabou de recer o valor de de (c) assim também sendo 10
    
    console.log(a, b, c)   Aqui no console.log o valor será 10 10 10 por que foi chamado as 3 variaveis. 

*/

/*3. Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis.
 Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase
. Alem disso, os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")   Aqui aparece uma caixa onde você responderá quantas horas vc trabalha por dia.
let t = prompt("Quanto você recebe por dia?")            Aqui aparece uma outra caixa onde você responderá quantos você ganha por dia.
alert(`Voce recebe ${t/p} por hora`)                     Aqui aparecerá uma mensagem "Alert" Com a divisão de (p) por (t) chegando em um valor que você recebe por hora.

*/


//1. Construa um programa, seguindo os seguintes passos:

let nome = prompt("Qual seu Nome Pequeno(a) Gafanhoto?: ")
let idade = prompt("Qual sua Idade Pequeno(a) Gafanhoto?: ")

/*Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
 R: O resultado final foiundefined  por que não tem um tipo de dado definido nas variaveis,
 por exemplo um nome com aspas para representar uma string ou um numero para representar um number.
*/
console.log(nome,idade )

console.log(typeof nome, typeof idade) // Aqui qunado chamamos o console percebemos que tanto o nome quanto a idade os dois aparece tipode dados String, por que tudo no console vem como ums string, 
                                       //mas podemos fazer a conversão do tipo de dados para usar em uma soma por exemplo.

console.log("Olá",nome,"Você tem",idade,"anos.")    


let camisa = prompt("Você esta de camisa preta (a) Gafanhoto?: ")
let maiorIdade = prompt("Você tem mais de 18 Anos Pequeno(a) Gafanhoto?: ")
let nascionalidade = prompt("Você nasnceu no Brasil Pequeno(a) Gafanhoto?: ")

console.log("Você esta de camisa preta (a) Gafanhoto?:",camisa)
console.log("Você tem mais de 18 Anos Pequeno(a) Gafanhoto?: ",maiorIdade)
console.log("Você nasnceu no Brasil Pequeno(a) Gafanhoto?: ",nascionalidade)

let a = 10
let b = 25
// aqui faremos a logica de trocar os valores
c = b
b = a
a = c
console.log("A =",a,"B=",b)

