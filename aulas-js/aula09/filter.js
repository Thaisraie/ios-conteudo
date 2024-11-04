let idades = [15, 10, 9, 40, 30, 29, 20, 18];

let idadeMenores = idades.filter((idade) => {
    return idade < 18;
});

console.log(idadeMenores);

let idadeMaiores = idades.filter((maiorIdade) => {
    return maiorIdade > 25;
});

console.log(idadeMaiores);