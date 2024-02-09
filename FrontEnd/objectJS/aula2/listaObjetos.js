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

cliente.enderecos.push({
    rua: "R. Maria Joseph",
    numero: 404,
    apartamento: false,
});

cliente.enderecos.push({
    rua: "R. Maria Anilda",
    numero: 374,
    apartamento: true,
    complemento: "ap 24",
});

//Filtra apenas os apartamentos

const listaAPS = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
); 

console.log(listaAPS);