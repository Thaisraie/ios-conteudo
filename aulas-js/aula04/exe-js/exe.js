const { Console } = require("console");

console.log("\n************************ Exercício 1 ************************");

let idade = 29;

if (idade < 18) {
    console.log("O usuário é menor de idade.");
} else if (idade >= 18 && idade < 60) {
    console.log("O usuário é adulto.");
} else if (idade >= 60) {
    console.log("O usuário é idoso.");
}

console.log("\n************************ Exercício 2 ************************");

let maiorIdade = 18;

if (maiorIdade >= 18) {
    console.log("Você pode dirigir!");
} else {
console.log("Você ainda não pode dirigir.");
}

console.log("\n************************ Exercício 3 ************************");

let verificaNumero = -1;

if (verificaNumero > 0) {
    console.log("O número é positivo.");
} else if (verificaNumero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

console.log("\n************************ Exercício 4 ************************");

let altura = 1.57;
let peso = 65;
let imc = peso / (altura * altura);

if (imc >= 18.5 && imc <= 24.9) {
    console.log(`O IMC ${imc.toFixed(2)} está dentro do intervalo saudável.`);
} else {
    console.log(`O IMC ${imc.toFixed(2)} não está dentro do intervalo saudável.`);
}

console.log("\n************************ Exercício 5 ************************");

let diaSemana = 5;

switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
}

console.log("\n************************ Exercício 6 ************************");

let pessoa = 60;

switch (true) {
    case (pessoa <= 12): 
        console.log("Você é uma criança.");
        break;
    case (pessoa <= 17):
        console.log("Você é um adolescente.");
        break;
    case (pessoa <= 59):
        console.log("Você é um adulto.");
        break;
    default:
        console.log("Você é um idoso.");
}

console.log("\n************************ Exercício 7 ************************");

let num1 = 2;
let num2 = 2;
let res;

let operacao = "divisão";

switch (operacao) {
    case "adição":
        res = num1 + num2;
        break;
    case "subtração":
        res = num1 - num2;
        break;
    case "multiplicação": 
        res = num1 * num2;
        break;
    case "divisão": 
        res = num1 / num2;
        break;
    }
console.log(`O Resultado da operação: ${operacao}, é: ${res}`);

console.log("\n************************ Exercício 8 ************************");

let valorProduto = 1000;
let cupom = "DESC2";
let desconto;

switch (cupom) {
    case "DESC1":
        valorProduto - (desconto * valorProduto);
        break;
    case "DESC2":
        valorProduto - (desconto * valorProduto);
        break;
    case "DESC3": 
        valorProduto - (desconto * valorProduto);
        break;
    case "DESC4": 
        valorProduto - (desconto * valorProduto);
        break;
    case "DESC5": 
        valorProduto - (desconto * valorProduto);
        break;
    default:
            console.log("ERRO! O Cupom aplicado não é válido.");
            break;
    }
    console.log(`O Valor original do produto é: ${valorProduto.toFixed(2)}, valor com desconto é: `);
    




