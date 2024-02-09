const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2023/03/02",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email) //herança de protótipo
    }
}

//user.exibirInfos();

//const exibir = user.exibirInfos  
//exibir() -> aqui a função acaba perdendo o laço (contexto) do "this" que tem com o objeto user

// const exibir = function() {
//     console.log(this.nome);
// }

// const exibirNome = exibir.bind(user) //o metodo bid trás o contexto para o "this" da função exibir
// exibirNome();

const admin = {
    nome : "Diogo",
    email: "Diogo@.com",
    role:"Admin",
    criaCurso() {
        console.log("curso criado!")
    }
}

Object.setPrototypeOf(admin, user) //setar propriedades do 2° parametro para o objeto do 1° parametro
admin.criaCurso();
admin.exibirInfos();