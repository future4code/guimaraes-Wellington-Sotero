// let array               Criando a variável array mas sem definir oque ela receberá
//console.log('a. ', array) Imprimindo no console a. e falando que a variavel array é indefinida.

//array = null             A variavel array recebe o valor de null.
//console.log('b. ', array)     i   mprimindo no console o valor b. null por que esse é o velor da varivael array

//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] O array recebe varios valores dentro dos []
//console.log('c. ', array.length) imprimindo a quantidade de numeros dentro do array que é 11

//let i = 0           Variavel i recebe o valor de 0 
//console.log('d. ', array[i]) Deveria imprimir o valor de i  no array, no entanto n foi criado um array na variavel i

//array[i+1] = 19   Não consegui entender oque esta parte.
//console.log('e. ', array) Imprime o valor de e. o que estaria guardado no array.

//const valor = array[i+6]  const valor recebe o valor de array com valor de i mais 6
//console.log('f. ', valor) imprime o valor guardado na variavel valor.

//const frase = prompt("Digite uma frase")  Cria uma caixa onde é feito uma pergunta e aguarda a resposta do usuário.
//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) Imprime no console  a frase que o usuário digita tranformando todas em maisculas e troca as letras
// "a" por "i" e mostra o tamanho de caracteres  frase incluindo os espaços. R: SUBI NUM ÔNIBUS EM MIRROCOS 27

let nomeUser = prompt("Por favor Digite seu Nome:")
let email = prompt("Por favor Digite seu E-mail")
console.log(`O e-mail ${email}, foi cadastrado com sucesso.Seja bem-vinda(o),${nomeUser}!`) 


let comidas = ["Salada","Pizza", "Lanches", "Arroz", "Feijão"]
console.log(comidas)

console.log("Essas são as minhas comidas preferidas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4]) 

comidaNova = prompt("Didite sua comida preferida!")
console.log("Minhas comidas preferidas são:", comidas) 


let listaDeTarefas = []
console.log(listaDeTarefas)

let tarefasDoDia1 = prompt("Digite a sua 1° tarefa do dia!")
let tarefasDoDia2 = prompt("Digite a sua 2° tarefa do dia!")
let tarefasDoDia3 = prompt("Digite a sua 3° tarefa do dia!")
let tarefas = [tarefasDoDia1, tarefasDoDia2, tarefasDoDia3]
console.log(tarefas)
let idice = prompt("Digite o Índice de uma tarefa que você já realizou!")
tarefas.splice(idice, 1 )
console.log(tarefas)