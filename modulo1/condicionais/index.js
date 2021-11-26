
//----------Exercício de interpretação 1

//a) O teste realiza uma pesquisa ao usuário onde identifica se o número digitado é igual a 2 ou 0

//b) Digitando um número diferente de 2 vai aparecer "não passou no teste" e gigitando o número 2 aparece "passou no teste".

//c) Para qualquer número diferente de 2 ou 0.

//----------Exercício de interpretação 2

//a) O código serve para pedir ao usuário que escolha uma fruta e após a escolha, o valor apareça no console.

//b) O preço da fruta  maçã  é  R$  5

//c) Vai aparecer o preço normal, pois com a retirada do break não vai interferir pois é a última fruta do código.

//----------Exercício de intepretação 3

//a) A primeira linha está pedindo para que o usuário digite um número

//b) Digitando o número 10 "esse número passou no teste" digitando -10 "aparece que essa mensagem não foi definida"

//c) Haverá um erro, pois não foi definido um outro codigo que seria "if(numero < 0)" junto com os outros códigos.


//----------Exercício de escrita 1
// Faça um programa que pergunta ao usuário qual a idade dele e imprima no console
// se ele/ela pode dirigir (apenas maiores de idade).

/* const idadeUsuario = Number (prompt("Digite sua idade"))
const idade = Number(idadeUsuario)

if (idadeUsuario >= 18) {
    console.log("Pode dirigir")
} else {
    console.log("Não pode dirigir")
} */

//----------Exercício de escrita 2

/* const turnoAluno = prompt("Digite M, V ou N")
const manha = (turnoAluno)
const tarde = (turnoAluno)
const noite = (turnoAluno)

if (manha === 'M') {
    console.log("Bom dia!")
}

if (tarde === 'V') {
    console.log("Boa tarde!")

}   
if (noite === 'N'){
    console.log("Boa Noite!")
} */

//----------Exercício de escrita 3

/* const turnoAluno = prompt("Digite M, V ou N")
let matutino
let vespertino
let noturno

switch (turnoAluno) {
    case "M":
        matutino = "Bom dia!"
        break;

    case "V":
        vespertino = "Boa tarde!" 
        break;
        
    case "N":
        noturno = "Boa noite!"
        break;
      default:  

}
console.log("Seu turno é", turnoAluno, matutino, vespertino, noturno)

 */


//----------Exercício de escrita 4

/* let generoFilme = prompt("Qual o genero do filme você quer assistir?")
precoFilme = Number(prompt("Qual o valor do ingresso?"))
 
             if (generoFilme === "fantasia" && precoFilme < 15){

             console.log("Bom filme");
             }

             else{

             
             console.log("Escolha outro filme" )
             } */