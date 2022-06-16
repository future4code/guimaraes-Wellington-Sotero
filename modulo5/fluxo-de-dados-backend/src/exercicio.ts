import { users } from "./data";

const validateAge = (age: number) => {
    try {
       if(age < 18) {
           throw new Error("Mensagem 2");
       }
       console.log("Mensagem 3");
    } catch(error: any) {
       console.log("entrou no catch")
       console.log(error.message)
    }
 }
 
validateAge(10)

//Exercício 1


//Exercício 2

//Exercício 3


//Exercício 4


//Exercício 5


//Exercício 6


//Exercício 7


//Exercício 8


//Exercício 9


