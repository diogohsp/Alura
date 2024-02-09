import Admin from "./Admin.js";
import User from "./user.js";
import Docente from "./Docente.js";

const novoUser = new User ('Maria', 'M@M.com', '2021-01-01')
console.log(`Instanciação "novoUser":`,novoUser.exibirInfos()) //Um metodo publico que inclui um metedo privado com informacoes privadas dentro dele
//console.log(novoUser.#montaObjUser()) //Não pode ser acessado fora da classe

// novoUser.nome='Marcela'
// console.log(novoUser.exibirInfos()) //É possivel alterar o nome de alguem por fora da classe

// ----- TESTE DE MUDANÇA DE INFORMAÇÕES EM CLASSE PRIVADA ------

// novoUser.#nome = 'Marcela' //o "nome" e "#nome", são propriedades diferentes entao os dois podem ter valores diferentes ao mesmo tempo
// console.log(novoUser.nome)

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2001-01-01')
console.log(`Instanciação "novoAdmin:"`, novoAdmin.exibirInfos())

//console.log(novoAdmin.nomeAdmin())// tenta acessar o nome do "novoAdmin" por fora da classe e retorna "undefined"

console.log(`O get mostra o:`,novoAdmin.nome) //acessa o #nome atrasves do "get" -> metodo de leitura onde ele so mostra oque tem dentro e nao edita nada.
novoAdmin.nome = 'André';
console.log(`Utilização do setter "set":`,novoAdmin.nome)

// novoAdmin.nome = '';
// console.log(`Utilização do setter "set":`,novoAdmin.nome) //retorna erro "formato não valido"

const novoDocente = new Docente ('RibeiroGui', 'guilherme@ribeiro.com', '2022-01-01')
console.log(novoDocente.exibirInfos()) //Polimorfismo