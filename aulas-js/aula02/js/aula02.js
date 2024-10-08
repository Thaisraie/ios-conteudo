let nome = prompt("Qual o seu nome: " );
let nota1 = Number(prompt("Digite sua 1° nota: "));
let nota2 = Number(prompt("Digite sua 2° nota: "));
// let nota3 = parseFloat(prompt("Digite sua nota: ")); 8.0
// let idade = parseInt(prompt("Digite sua idade: ")); 8

let media = (nota1 + nota2) / 2

alert(`Olá, ${nome}! sua média é ${media}`);

