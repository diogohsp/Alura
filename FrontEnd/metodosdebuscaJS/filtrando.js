alunos = ["Ana", "Marcos", "Maria","Mauro"];
notas = [7, 4.5, 8, 7.5];

// let alunosPadronizados = alunos.map((aluno) => {
//     return aluno.toUpperCase();
// });

// const alunoENotas = [alunosPadronizados, notas];

// function verificaReprova(aluno){
//     if(alunoENotas[0].includes(aluno)){
//         const [alunos, notas] = alunoENotas;

//         const indice = alunos.indexOf(aluno);
//         const notaAluno = notas[indice];

//         if(notaAluno < 7){

//         console.log(`${aluno} tem a média ${notaAluno}, e foi REPROVADO`)
//         }else{
//             console.log(`${aluno} tem a média ${notaAluno}, e foi APROVADO`)    
//         } 

//     }else{
//         console.log("Aluno não encontrado!");
//     }    
// }

// console.log(alunosPadronizados);
// verificaReprova("MARCOS");

const reprovados = alunos.filter((aluno, indice) => {
    return notas[indice] < 7;
})

console.log(reprovados);
