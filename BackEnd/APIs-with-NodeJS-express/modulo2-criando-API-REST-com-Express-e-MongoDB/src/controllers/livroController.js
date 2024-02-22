import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) { //static permite acessar a função sem ter que instaciar a classe antes
    try{
      const listaLivros = await livro.find({}); //acessando o model do mongoose
      res.status(200).json(listaLivros);
    }catch{
      res.status(500).json({message: `${erro.message} - falha na requisição`})
    }
  }
  static async listarLivroPorId(req, res) { //static permite acessar a função sem ter que instaciar a classe antes
    try{
      const id = req.params
      const livroEncontrado = await livro.findById(id)); //acessando o model do mongoose
      res.status(200).json(livroEncontrado);
    }catch{
      res.status(500).json({message: `${erro.message} - falha na requisição do livro`})
    }
  }
  static async cadastrarLivro(req,res){
    try{
        const novoLivro = await livro.create(req.body)
        res.status(201).json({message: "criado com sucesso", livro: novoLivro});
    }catch(erro){
        res.status(500).json({message: `${erro.message} - falha ao cadastrar livro`})
    }
  }
  static async atualizarLivro(req, res) { //static permite acessar a função sem ter que instaciar a classe antes
    try{
      const id = req.params
      await livro.findByIdAndUpdate(id, req.body); //
      res.status(200).json({message: "livro atualizado"}});
    }catch{
      res.status(500).json({message: `${erro.message} - falha na atualização do livro`})
    }
  }
}

export default LivroController;
