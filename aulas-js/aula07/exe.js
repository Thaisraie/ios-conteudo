function calcularIMC() {

    let altura = Number(prompt("Qual sua altura: "));
    let peso = Number(prompt("Qual seu peso "));
    let imc = peso / (altura * altura);

    if (imc < 16.9) {
    alert(`Muito abaixo do peso ${imc.toFixed(2)}`);
    } else if (imc <= 18.4) {
        alert(`Seu IMC é de ${imc.toFixed(2)} e você está abaixo do peso.`);
    } else if (imc < 18.5) {
        alert(`Seu IMC é de ${imc.toFixed(2)} e seu peso está normal.`);
    } else if (imc < 29.9) {
        alert(`Seu IMC é de: ${imc.toFixed(2)} e você está acima do peso.`);
    } else if (imc < 34.9) {
        alert(`Seu IMC é de: ${imc.toFixed(2)} e você está com obesidade grau I.`);
    } else if (imc < 40) {
        alert(`Seu IMC é de: ${imc.toFixed(2)} e você está com obesidade grau II.`);
    } else {
        alert(`Seu IMC é de: ${imc.toFixed(2)} e você está com obesidade grau III.`);
    }
}

function calcularEuro() {
    let real = parseFloat(prompt("Informe o valor do real: "));
    let euro = 6.15
}