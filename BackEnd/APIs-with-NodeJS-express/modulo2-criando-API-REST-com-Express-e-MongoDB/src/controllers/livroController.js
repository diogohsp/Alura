import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
  static async listarLivros(req, res) {
    //static permite acessar a função semd ter que instaciar a classe antes
    try {
      const listaLivros = await livro.find({}); //acessando o model do mongoose
      res.status(200).json(listaLivros);
    } catch {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }
  static async listarLivroPorId(req, res) {
    //static permite acessar a função sem ter que instaciar a classe antes
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id); //acessando o model do mongoose
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do livro` });
    }
  }
  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorBuscado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorBuscado._doc } };
      const livroCriado = await livro.create(livroCompleto);
      res
        .status(201)
        .json({ message: "criado com sucesso", livro: livroCriado });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  }
  static async atualizarLivro(req, res) {
    //static permite acessar a função sem ter que instaciar a classe antes
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body); //atualiza o livro com que foi passado no bodyw
      res.status(200).json({ message: "livro atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização do livro` });
    }
  }
  static async excluirLivro(req, res) {
    //static permite acessar a função sem ter que instaciar a classe antes
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id); //
      res.status(200).json({ message: "livro excluído com sucesso" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na exclusão do livro` });
    }
  }
}

export default LivroController;
