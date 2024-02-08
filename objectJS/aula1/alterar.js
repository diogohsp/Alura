const pessoa = {
    nome: "Diogo",
    profissao: "Dev",
    idade: "18",
};

console.log(pessoa.nome); //Diogo

//você pode definir um campo por fora do objeto

pessoa.telefone = "19 111222333";

console.log(pessoa.telefone);

//também é possivel alterar a prioridade

nomee = "Leandro";
pessoa.nome= nomee;

console.log(pessoa.nome); //Leandro
console.log(pessoa);

//Você pode manipular o objeto guardado dentro da variavel constante
//Porém quando "constante" você não pode reatribuir algo na variavel

//Exemplo:

//Const outraPessoa{ nome: "Lucas";}
//outraPessoa = pessoa; isso irá dar erro.

delete pessoa.idade;
console.log(pessoa)

