const prompt = require("prompt-sync")()

// 1.Escreva um algoritmo que imprima todos os números de 1 a 100.
// let num = Number(100)
// for(let i = 0;i <= num; i++){
//     console.log(i)
// }

// 2.Escreva um algoritmo que imprima os números ímpares de 1 a 100.
// let num = Number(100)
// for(let i = 0; i <= num; i++){
//     let calc = i % 2
//     if(calc != 0){
//         console.log(i)
//     }
// }

// 3.Escreva um algoritmo que leia 10 números e calcule a soma deles.
// let cont = 10
// let soma = 0
// for(let i = 0; i <= cont; i++){
//     let valor = Number(prompt('Digite um numero: '))
//     soma += valor
//     console.log(`${i}/${cont} - valor: ${valor}, total: ${soma}`)
// }

// 4.Escreva um algoritmo que leia 10 números e calcule a média deles
// let cont = 10
// let soma = 0
// for(let i = 1; i <= cont; i++){
//     let valor = Number(prompt('Digite um numero: '))
//     soma += valor
//     console.log(`${i}/${cont} - valor: ${valor}, total: ${soma}`)
//     if(i == 10){
//         let calc = soma/10
//         console.log(calc)
//     }
// }

// 5.Escreva um algoritmo que leia um número e imprima a tabuada desse número de 1 a 10.
// let cont = 10
// let num = Number(prompt('Digite um numero: '))
// for(let i = 0;i <= cont; i++){
//     let calc = num*i
//     console.log(`${num} X ${i} = ${calc}`)
// }

// 6.Escreva um algoritmo que leia um número n e imprima todos os números de 1 a n
// let num = Number(prompt('Digite um numero: '))
// for(let i = 1;i <= num; i++){
//     console.log(i)
// }

// 7.Escreva um algoritmo que leia um número n e calcule o fatorial desse número.
// let num = Number(prompt('Digite um número para saber o fatorial: '))
// if (num < 0) {
//     console.log("Fatorial não é definido para números negativos.")
// } else {
//     let fatorial = 1; // Inicializa o fatorial como 1
//     for (let i = num; i > 1; i--) { // Itera de `num` até 1
//         fatorial *= i; // Multiplica o acumulador
//     }
//     console.log(`O fatorial de ${num} é: ${fatorial}`)
// }

// 8. Escreva um algoritmo que leia um número n e imprima todos os números pares de 1 a n.
// let num = Number(prompt('Digite um numero para verificar os numeros pares no caminho: '))
// for(let i = 1; i <= num; i++){
//     let calc = i%2
//     if(calc == 0){
//         console.log(i)
//     }
// }