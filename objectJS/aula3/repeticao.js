const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555444333", "111444333222"],
};

cliente.enderecos = [
    {
    rua: "R. Maria Climber",
    numero: 72,
    apartamento: true,
    complemento: "ap 137",
    },
];

// O For abaixo retorna para mim as todas as chaves porém ele tenta retornar o objeto em si junto e retonra com um "erro" [object Object]

// for(let chave in cliente) {
//     console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
// }

//verificacao se for um objeto ou uma funcao

for(let chave in cliente){
    let tipo = typeof cliente[chave]; //verifica o tipo da chave segue a linha: objeto (cliente)-> chave(as propriedades do objeto)-> retorna o tipo da chave.

    if(tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
    }
}