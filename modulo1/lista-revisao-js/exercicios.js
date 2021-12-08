// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   

   return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    return array.sort(function(a , b){return a-b})
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayNova = []
    for(let i of array) {
        if(i % 2 === 0) {
            arrayNova.push(i)
        }
    }
    return arrayNova

    

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayNova = []
    for(let num of array) {
        if(num % 2 === 0) {
            arrayNova.push(Math.pow(num ,2))
        }
    }
    return arrayNova
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    return Math.max.aplly(null, array)
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior = num1 > num2? num1 : num2
    let divisivel = maior % 2 === 0
    let menor = num1 > num2? num1-num2 : num2-num1
    let myObject = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: divisivel,
        diferenca: menor,
    }
    return myObject

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const numeroN = (num) => {
        let array = []
        for(let i=0; array.length < num; i++){
            if(i % 2 === 0){
                array.push(i)

            }
        }
        return array
    }

    console.log(numeroN(5));
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   let assistirFilme = {
       nome: ' ',
       ano: ' ',
       diretor: ' ',
       atores: ' ',
   }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}