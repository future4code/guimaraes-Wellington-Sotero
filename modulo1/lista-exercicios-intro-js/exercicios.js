// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Ola Mundo')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  
  altura = Number(prompt("Qual a altura do retângulo?"))
  largura = Number(prompt("Qual a largura do retângulo?"))

  console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  
  anoAtual = Number(prompt("Ano atua?"))
  anoNascimento = Number(prompt("Ano nascimento"))

  console.log(anoAtual - anoNascimento)

  

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

 imc = peso / (altura * altura)

  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = prompt("Qual seu nome?")
  let idade = Number(prompt("Qual sua idade?"))
  let email = prompt("Qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const cor1 = prompt("qual sua primeira cor favorita?")
  const cor2 = prompt("qual sua segunda cor favorita?")
  const cor3 = prompt("qual sua terceira cor favorita?")

  const cores = [cor1, cor2, cor3]

  console.log(cores)
  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  string:"oi"

  return string.toUpperCase()

  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  custo = 
  valorIngresso = 
  ingressosVendidos = custo / valorIngresso

  return ingressosVendidos
  

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length

  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

  

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array, array0) {
  // implemente sua lógica aqui
  array0 = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = array0

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
 const anoAtual = Number(prompt("2020"))
 const anoNascimento = Number(prompt("2000"))
 const emissaoCarteira = Number(Prompt("2015"))

 let idade = anoAtual - anoNascimento
 let dataCarteira = anoAtual - emissaoCarteira

 if(idade <= 20 && dataCarteira >=5 ){
    console.log(true)
 }else if (idade > 50 && dataCarteira >=15 ){
  console.log(true)
 }else if(idade >20 && idade < 50 && dataCarteira >=10){
   console.log(true)
 }
  else {
    console.log(false)
  }

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
