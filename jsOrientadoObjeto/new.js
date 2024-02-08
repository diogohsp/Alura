// function User(nome, email){
//     this.nome = nome
//     this.email = email

//     this.exibirInfos= function() {
//         return `${this.nome}, ${this.email}`
//     }
// }

// // const novoUser = new User ('Diogo', 'Diogo@Diogo.com') -> "new" criando objeto utilizando o metodo construtor
// // console.log(novoUser.exibirInfos())

// function Admin(role) {
//     User.call(this, 'Diogo', 'Diogo@Diogo.com') //this é para dar o contexto de User
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype) // criando um objeto e passando as propriedades de User
// const novoUser = new Admin('Admin')

// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

//---------------------------------------------------

const user = {
    init: function (nome, email) {
        this.nome = nome
        this.email = email
    },
    exibirInfos: function(nome) {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Diogo', 'Diogo@.com')
console.log(novoUser.exibirInfos())

// console.log(novoUser.exibirInfos('Juliana'))
// console.log(user.isPrototypeOf(novoUser))