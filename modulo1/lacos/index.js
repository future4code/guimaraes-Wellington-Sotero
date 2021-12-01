


//----------Exercício de interpretação

//1 -  O código está dobrando o valor de 5 usando o i++

//2 - a) Será impresso a sequência dos números da Variável Lista (10, 11, 12, 15, 17, 19, 21, 23, 25, 27 e 30)
//2 - b) É suficiente, usamos o for .of pra usar menos códigos enquanto estiver codando

//3 -  No console aparece *, **, ***, ****.

//----------Exercício de escrita



//1 

/* const pets = Number(prompt("Quantos Pets você tem?")) 

let arrayNomePet = []

if(pets === 0){
    console.log("Poxa, que pena! Você consegue adotar um?");
} else if(pets > 0){
    for(let i=0; i < pets; i++){
        arrayNomePet.push(prompt('Qual o nome do pet?'))


    }

    console.log("Os nomes são:", arrayNomePet);
} */




//2

/* const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

const maiorMenor = (array) => {
    let maiorNumero = 0
    let menorNumero = Infinity

    for(let i=0; i < array.length; i++){
        if(array[i] < menorNumero){
            menorNumero = array[i]
        }else if(array[i] > maiorNumero){
            maiorNumero = array[i]
        }
        
    }

    console.log("O menor número é:", menorNumero)
    console.log("O maior número é:", maiorNumero)

}

    maiorMenor(arrayOriginal)

 */