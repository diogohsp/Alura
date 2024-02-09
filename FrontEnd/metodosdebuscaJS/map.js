notas = [10,6.5,8,7.5];

const notasatualizadas = notas.map((nota) => {
    return nota+1 >= 10 ? 10 : nota + 1;
})

console.log(notas);
console.log(notasatualizadas);