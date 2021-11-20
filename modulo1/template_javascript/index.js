//Exercício 1
let textoDoUsuario = prompt("Insira um texto")

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)




//Exercício 2

function mensagem(string){

    const tamanho = string.length

    let maiscula = string.toUpperCase()

    let juntar = maiscula + " " + tamanho
    
    return juntar

}

console.log(mensagem("Wellington"))



//Exercício 3

let somaNumeros = (n1, n2) => {
    return n1+n2
 }
 
 let subNumeros = (n1, n2) => {
   return n1-n2
 }

 let multipNumeros = (n1,n2) => {
    return n1*n2
  }

 let divisaoNumeros = (n1,n2) => {
  return n1/n2
 }

 console.log("Numeros Inseridos: "   +2 +" e "+5)
 console.log("Soma:",somaNumeros(2,5))
 console.log("Diferença:",subNumeros(2,5))
 console.log("Multiplicação:",multipNumeros(2,5))
 console.log("Divisão:",divisaoNumeros(2,5))