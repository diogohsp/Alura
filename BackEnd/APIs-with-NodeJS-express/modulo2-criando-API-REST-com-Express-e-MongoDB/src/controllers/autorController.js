import { autor } from "../models/Autor.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Erro de listagem` });
    }
  }
  static async listarAutorPorId(req, res) {
    //static permite acessar a função sem ter que instaciar a classe antes
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id); //acessando o model do mongoose
      res.status(200).json(autorEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do ` });
    }
  }
  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "criado com sucesso", autor: novoAutor });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar autor` });
    }
  }
  static async atualizarAutor(req, res) {
    //static permite acessar a função sem ter que instaciar a classe antes
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body); //atualiza o autor com que foi passado no bodyw
      res.status(200).json({ message: "autor atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização do autor` });
    }
  }
  static async excluirAutor(req, res) {
    //static permite acessar a função sem ter que instaciar a classe antes
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id); //
      res.status(200).json({ message: "autor excluído com sucesso" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na exclusão do autor` });
    }
  }
}

export default AutorController;
