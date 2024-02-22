import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) { //static permite acessar a função sem ter que instaciar a classe antes
    const listaLivros = await livro.find({}); //acessando o model do mongoose
    res.status(200).json(listaLivros);
  }
  static async cadastrarLivro(req,res){
    try{
        const novoLivro = await livro.create(req.body)
        res.status(201).json({message: "criado com sucesso", livro: novoLivro});
    }catch(erro){
        res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
    }
  }
}

export default LivroController;
