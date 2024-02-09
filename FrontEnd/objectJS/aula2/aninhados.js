const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555444333", "111444333222"],
};

cliente.endereco = {
    rua: "R. Maria Climber",
    numero: 72,
    apartamento: true,
    complemento: "ap 137",
}

console.log(cliente.endereco.rua);