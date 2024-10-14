let nota1, nota2, media, faltas;
nota1 = 5 
nota2 = 5
faltas = 7
media = (nota1 + nota2) / 2;

if (media >= 7 && faltas <= 5) {
    console.log(`O jovem está aprovado com a média ${media} e quantidade de ${faltas} faltas`);
} else {
    console.log(`O jovem está reprovado com a média ${media} e quantidade de ${faltas} faltas`);
}
console.log("Fim.");