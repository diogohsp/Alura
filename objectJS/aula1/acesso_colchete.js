const cliente = {
    nome: "Diogo",
    idade: "18",
    cpf: "12345678912",
    email: "diogo@dominio.com",
}

//console.log(`O nome do cliente é ${cliente["nome"]} e a sua idade é ${cliente["idade"]}`);

//console.log(`Os 3 primeiros digitos do CPF são ${cliente["cpf"].substring(0,3)}`);

//O Colchetes é utilizados quando vc não tem a informação dos campos ou quando elas são passadas por parametros

const chaves = ["nome", "idade", "cpf", "email","numero"];

chaves.forEach(chave => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});
