import User from "./user.js";

export default class Admin extends User {
    constructor (nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    // nomeAdmin() {
    //     return `${this.nome}`
    // }

    exibirInfos() {
        return `${this.nome}, ${this.role},${this.email}`
    }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas!`
    }
}

// const novoAdmin = new Admin('Rodrigo', "R@R.com", '2021-01-01')//"novoAdmin" é uma instacia da classe "Admin"
// console.log(novoAdmin.criarCurso('NodeJS',25))