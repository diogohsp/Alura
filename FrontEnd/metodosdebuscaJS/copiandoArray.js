
// Se atribuar um novoArray = arrayOriginal o JS entende que eles apoontam para o mesmo endereço de memória assim editando os 2 ao mesmo tempo

const notas = [7, 7, 8, 9];

const novasNotas = [...notas]; //"..." spread operator, ele copia os elementos de notas

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);