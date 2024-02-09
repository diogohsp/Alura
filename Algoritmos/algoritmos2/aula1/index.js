const {edFolha, edGalho} = require('./arrays')

function juntaListas(lista1, lista2){
    let listaFinal = []
    let posicaoAtualL1 = 0;
    let posicaoAtualL2 = 0;
    let posicaoAtualLF = 0;

    while(posicaoAtualL1 < lista1.length && posicaoAtualL2 < lista2.length){

        let produtoAtualL1 = lista1[posicaoAtualL1];
        let produtoAtualL2 = lista2[posicaoAtualL2];

        if(produtoAtualL1.preco < produtoAtualL2.preco){
            listaFinal[posicaoAtualLF] = produtoAtualL1;
            posicaoAtualL1++;
        }else{
            listaFinal[posicaoAtualLF] = produtoAtualL2;
            posicaoAtualL2++;
        }

        posicaoAtualLF++;
    }

    while(posicaoAtualL1 < lista1.length){
        listaFinal.push(lista1[posicaoAtualL1]);
        posicaoAtualL1++
        posicaoAtualLF++
    }

    while(posicaoAtualL2 < lista2.length){
        listaFinal.push(lista2[posicaoAtualL2]);
        posicaoAtualL2++
        posicaoAtualLF++
    }

    return listaFinal
}

console.log(juntaListas(edGalho, edFolha))
