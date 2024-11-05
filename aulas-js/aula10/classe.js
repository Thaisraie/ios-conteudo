class Celular {
    constructor(marca, modelo, conectividade) {
        this.marca = marca
        this.modelo = modelo
        this.conectividade = conectividade
    }
}

let celular01 = new Celular('Apple', 'Iphone 13', 'Wifi');
let celular02 = new Celular("Samsumg", "S23", "Dados móveis");
let celular03 = new Celular("LG", "K10", "Wifi");

console.log("-----------------------------------------------------------------------");
console.log(celular01);
console.log("-----------------------------------------------------------------------");
console.log(celular02);
console.log("-----------------------------------------------------------------------");
console.log(celular03);
