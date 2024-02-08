export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo 
    //define a propriedade que vc quer proteger 

    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome //protege a propriedade com #
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome() { //getter para expor o #nome fora da classe apenas para mostra-lo
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    set nome(novoNome){
        if(novoNome === ""){
            throw new Error('Formato não válido')
        }
        this.#nome = novoNome
    }

    // #montaObjUser () {
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }

    // exibirInfos() {
    //     const objUser = this.#montaObjUser()
    //     return `${objUser.nome}, ${objUser.email}`
    // }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}

// const novoUser = new User ('Diogo', 'Diogo@.com', '2003-12-09')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

