const alunos = ['CaRLos','DIogo', 'pedro', 'henRIque', 'jÕao'];

const alunosPadronizados = alunos.map((aluno) => {
    return aluno.toUpperCase();
})

console.log(alunosPadronizados);