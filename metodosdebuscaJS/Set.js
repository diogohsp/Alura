// set -> conjunto

const nomes =["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set(nomes); // novo Set (o Set é uma classe JS que tem algumas lógicas internas, ele é tipo uma lista, e uma de suas logicas é que seus elementos não podem se repetir)

// const nomesAtualizados = [...meuSet];

//REFATPRANDO O CODIGO ACIMA

const nomesAtualizados = [...new Set(nomes)]

console.log(`A lista original é ${nomes}`);
console.log(`A lista atualizada é ${nomesAtualizados}`);