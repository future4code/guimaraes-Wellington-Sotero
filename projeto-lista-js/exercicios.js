// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A

function soma(num1, num2) {
 // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Digite a altura"))
  let largura = Number(prompt("Digite a largura"))
  let soma = altura * largura

  console.log(soma)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  anoNascimento = Number(prompt("Em que ano você nasceu?"))
  anoAtua = Number(prompt("Digite o ano atual"))
  Idade = anoNascimento - anoAtua
  console.log(Idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Digite su nome!")
  idade = Number(prompt("Digite sua idade!"))
  email = prompt("Digite seu E-mail!")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
 const cor1 = prompt("Digite uma cor")
 const cor2 = prompt("Digite uma cor")
 const cor3 = prompt("Digite uma cor")

 console.log(array= [cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let tex = string
  let texm = string.toUpperCase()
  return texm

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let soma = custo/valorIngresso
  return soma
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1] // índice do primeiro elemento: array[0] | índice do último elemento: [array.length-1] 
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array, novoArray) {
    // implemente sua lógica aqui
    novoArray = array[0]
    array[0] = array[array.length - 1]
    array[array.length - 1] = novoArray
    return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
    
} 

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}