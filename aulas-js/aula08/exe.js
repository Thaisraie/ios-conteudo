// const calcularImc = (altura = 0, peso = 0) => {
//     let imc = peso / (altura * altura);
//     return imc;
// }
// console.log(`O IMC do usuário é: ${calcularImc(1.90,70).toFixed(2)}`);

const calcularIMC = () => {
    let altura = Number(document.querySelector("#altura").value);
    let peso = Number(document.querySelector("#peso").value);
    let calculo = document.querySelector("h2");

    let imc = peso / (altura * altura);
    calculo.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`
}