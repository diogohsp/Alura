import User from "./user.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    exibirInfos() { //Polimorfismo
        return `${this.nome},${this.role}, ${this.email},${this.ativo}`
    }

    aprovaEstudante(estudante, curso){
        return `O estudante ${estudante} foi aprovado no curso de ${curso}`
    }
}

// const novoDocente = new Docente('Robson', 'R@R.com', '1997-01-01') //"novoDocente" é uma instacia da classe "Docente"
// console.log(`Docente:`, novoDocente.nome)
// console.log(novoDocente.aprovaEstudante('Diogo', 'NodeJS'))

//Classes não tem "HOISTING" elas não são inicializadas ao iniciar o codigo, são carregadas de acordo com ele então não podemos chamalas antes de crialas
