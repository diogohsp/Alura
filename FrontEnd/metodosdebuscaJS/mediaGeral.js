const sala1 = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const sala2 = [6, 5, 8, 9, 5, 6];
const sala3 = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    const somasDasNotas = notasDaSala.reduce((acumulador, nota) =>{
        return acumulador + nota;
    }, 0)

    const media = somasDasNotas / notasDaSala.length;
    return media;

}

console.log(`A média da sala é: ${calculaMedia(sala1)}`);