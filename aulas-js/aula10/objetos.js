let aluno01 = {
    nome: "Thais",
    sobreNome: "Siqueira",
    RA: 123,
    matricula: {
        curso: "Dev. Web",
        alunoMatriculado: true
    }
}

let aluno02 = {
    nome: "José",
    sobreNome: "Rocha",
    RA: 124,
    matricula: {
        curso: "Dev. Web",
        alunoMatriculado: false
    }
}

let aluno03 = {
    nome: "Ermerson",
    sobreNome: "Prof",
    RA: 126,
    matricula: {
        curso: "Dev. Web",
        alunoMatriculado: true
    }
}

console.log(aluno01.matricula.alunoMatriculado);
console.log(aluno02.sobreNome);
console.log(aluno03.RA);
console.log("----------------------------------");

// classes - moldes
// atributos - caracteristicas 
// métodos - ações

let celular = {
    marca: "apple",
    modelo: "iphone 13",
    conectividade: "wifi",
    ouvirMusica: {
        tocar: "Bruno mars - Talking to the Moon",
        pausar: true
    }
}
console.log(celular.ouvirMusica.tocar);
console.log(celular.ouvirMusica.pausar);


