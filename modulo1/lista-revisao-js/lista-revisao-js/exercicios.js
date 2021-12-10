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

    return array.reduce(function(a,b) {
        return Math.max(a,b);})
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maiorNumero = undefined;
    let menorNumero = undefined;
    let maiorDivisivelPorMenor = undefined;
    let diferenca = undefined;
 
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2
    } else {
        maiorNumero = num2;
        menorNumero = num1
    }

    if (maiorNumero % menorNumero === 0) {
        maiorDivisivelPorMenor = true;
    } else {
        maiorDivisivelPorMenor = false;
    }

    diferenca = maiorNumero-menorNumero

    return {
        "maiorNumero": maiorNumero,
        "maiorDivisivelPorMenor": maiorDivisivelPorMenor,
        "diferenca": diferenca,
    }



}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

        let numerosPares = []
   for( let i = 0; numerosPares.length < n; i++){
       if (i % 2 === 0 ){
           numerosPares.push(i)
       }
   }
   return numerosPares
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoB === ladoC & ladoC === ladoA){
        return "Equilátero"
     }
     else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
        return "Escaleno"
     }
     else {
        return "Isósceles"
     }
  

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    array.sort((a,b)=> a-b)
    return array = [array[array.length-2], array[1]]
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {


    const chamadaFilme = { 
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
        }
        return(`Venha assistir ao filme ${chamadaFilme.nome}, de ${chamadaFilme.ano}, dirigido por ${chamadaFilme.diretor} e estrelado por ${chamadaFilme.atores[0]}, ${chamadaFilme.atores[1]}, ${chamadaFilme.atores[2]}, ${chamadaFilme.atores[3]}.` )
    }


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

    let anonimo = {
        ...pessoa, nome: "ANÔNIMO"
   }
   return anonimo

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    let autorizadas = pessoas.filter((pessoa) => {
        return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    }) 

    return autorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let naoAutorizadas = pessoas.filter((pessoa) => {
        return !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    })

    return naoAutorizadas
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas[0].saldoTotal = 500;
    contas[1].saldoTotal = 6260;
    contas[2].saldoTotal = -3340;
    contas[3].saldoTotal = -1900;
    contas[4].saldoTotal = 1300;
    contas[5].saldoTotal = 1400;

    contas[0].compras = [];
    contas[1].compras = [];
    contas[2].compras = [];
    contas[3].compras = [];
    contas[4].compras = [];
    contas[5].compras = [];

    return contas; 

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    //A sua tarefa é criar uma função que receba o array acima como parâmetro e retorne um array de consultas,
    // ordenado pelos nomes dos pacientes (em ordem alfabética)

    var consultasOrdenadas = [];
    for (var i = 0; i < consultas.length; i++) {
        consultasOrdenadas.push(consultas[i].nome);
    }
    consultasOrdenadas.sort();
    var consultacomp = [];
    for (var i = 0; i < consultasOrdenadas.length; i++) {
        for (var j = 0; j < consultas.length; j++) {
            if (consultasOrdenadas[i] === consultas[j].nome) {
                consultacomp.push(consultas[j]);
            }
        }
    }
    return consultacomp;
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

   
    const array = [
        {
          nome: "João",
        dataDaConsulta: new Date('Oct 01 2021')
      },
      {
          nome: "Pedro",
        dataDaConsulta: new Date('Jul 02 2021')
      },
      {
          nome: "Paula",
        dataDaConsulta: new Date('Nov 03 2021')
      },
      {
          nome: "Márcia",
        dataDaConsulta: new Date('May 04 2021')
      }
    ];
    
    array.sort(function(a,b) { 
        return a.dataDaConsulta.getTime() - b.dataDaConsulta.getTime() 
    });
    
    console.log(array);



}