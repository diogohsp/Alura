const cliente = {
    nome: "Diogo",
    idade: "18",
    cpf: "12345678912",
    email: "diogo@dominio.com",
}

console.log(`O nome do cliente é ${cliente.nome} e a sua idade é ${cliente.idade}`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`);