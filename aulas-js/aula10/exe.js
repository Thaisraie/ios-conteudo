let series = ["Sorriso Real", "O amor mora ao lado", "Dra Cha", "Beleza verdadeira", "Pousando no amor"];

series.forEach((series, index, array) => {
    console.log(`Série: ${series}`);
    console.log(`Indice da série: ${index}`);
    console.log(`Array da série: ${array}`);
    console.log("*******************************");
});

let numbers = [1, 2, 3, 4, 5];

let dobroNumbers = numbers.map(numero => numero * 2); 
    console.log(`O dobro do array: ${numbers}. \né: ${dobroNumbers}.`);
console.log("*******************************");

let numbersPar = numbers.filter((numbers) => {
    return numbers % 2 === 0;
})
console.log(`Números Pares: ${numbersPar}`);
console.log("*******************************");

let frutas = ["Morango", "Banana", "Maçã", "Uva", "Kiwi"];

frutas.forEach((frutas) => {
    console.log(frutas);
})


