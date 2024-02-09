const alunos = ['Carlos','Diogo', 'Pedro', 'Henrique', 'Jõao'];
const medias = [6,8,10,7,4];

const mediaNomeAlunos = [alunos, medias];

function exibeNotaNome(aluno){
    if(mediaNomeAlunos[0].includes(aluno)){
        //const alunos = mediaNomeAlunos[0]; 
        //const medias = mediaNomeAlunos[1];
        
        const [alunos,medias] = mediaNomeAlunos;

        const indice = alunos.indexOf(aluno);

        const mediaAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaAluno}`)

    }else{
        console.log("Aluno não encontrado!");
    }    
}

exibeNotaNome("Carlos")