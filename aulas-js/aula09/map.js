let valorNum = [8, 10, 9, 5, 1];

let valorTexto = valorNum.map((numero) => {
    console.log(`Valor em texto: ${numero.toString()}`);
})
console.log("*******************************");


let nome = ["Thais", "José", "Mari", "Larissa"];

let letraMaiscula = nome.map((nomes) => {
    console.log(`Nomes em letra maiscula: ${nomes.toUpperCase()}`);
});
console.log("*******************************");

let arrayTexto = valorNum.map((num) => {
    return num.toString()
});

console.log(typeof arrayTexto[2]);
console.log(arrayTexto[2]);

