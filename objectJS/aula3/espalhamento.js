const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555444333", "111444333222"],
};

cliente.endereco = [
    {
    rua: "R. Maria Climber",
    numero: 72,
    apartamento: true,
    complemento: "ap 137",
    },
];

function ligacao(telefoneComercial, telefoneResidencial){
    console.log(`Ligação efetuada para ${telefoneComercial}`);
    console.log(`Ligação efetuada para ${telefoneResidencial}`);
}

ligacao(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0],
}

console.log(encomenda);