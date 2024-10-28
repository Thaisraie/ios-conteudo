let titulo = document.querySelector("#titulo");
titulo.style.color = "green";

let lorem = document.querySelector("p");
lorem.innerHTML = "Thais";

let paragrafo = document.querySelector(".paragrafo");
paragrafo.style.background = "black";
paragrafo.style.color = "#ffff";

let lista = document.querySelectorAll("li");
lista[0].style.color = "red";

let listaNaoOrganizada = document.querySelectorAll("li");
for (let i = 1; i < lista.length; i++) {
    lista[i].style.border = "1px solid pink";
}
console.log(listaNaoOrganizada);