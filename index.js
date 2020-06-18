const readLineSync = require('readline-sync');

console.log("Esse programa tem o intuito de mostrar para você o seu IMC!")
console.log(`Primeiramente, vamos lá! Qual é o seu nome?`);
let nome = readLineSync.prompt();

console.log(`Ok, entendi! Seu nome é ${nome}!`);

console.log(`Mas agora, qual é o seu peso (kg)?`);
let peso = readLineSync.prompt();

console.log(`Ok, agora eu preciso da sua altura.`)
let altura = readLineSync.prompt();

let imc = peso / (altura * altura);

console.log(`Maravilha, calculei aqui e seu IMC é: ${imc}`);