const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11555444333", "111444333222"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo){
            console.log("Saldo insuficiente!");
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado com sucesso! Seu saldo agora é ${this.saldo}`)
        } 
    }
};

cliente.efetuaPagamento(210); // Saldo insuficiente
cliente.efetuaPagamento(180); // Sobra de saldo = 20

// Objeto1 = Objeto, os 2 apontam para o mesmo lugar na memoria caso altere qualquer um deles os 2 serão alterados
