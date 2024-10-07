let nome = "Thais";
let nota1 = 6;
let nota2 = 4;
let media = (nota1 * 0.6) + (nota2 * 0.4);

let resultado = media >= 7 ? "aprovado" : "reprovado";

console.log(`A aluna: ${nome} teve a média de: ${media.toFixed(1)} e foi: ${resultado}`);
