import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: [true, "O titulo do livro é obrigatório"] },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O(A) autor é obrigatório"],
  },
  editora: {
    type: String,
    required: [true, "É obrigatório informar a editora do livro"],
    enum: {
      values: ["Casa do codigo", "Alura"],
      message: "A editora {VALUE} não é um valor permitido",
    },
  },
  numeroPaginas: {
    type: Number,
    // min: [
    //   10,
    //   "O número de páginas deve estar entre 10 e 5000. Valor fornecido {VALUE}",
    // ],
    // max: [
    //   5000,
    //   "O número de páginas deve estar entre 10 e 5000. Valor fornecido {VALUE}",
    // ],

    //validação personalizada
    validate: {
      validator: (valor) => {
        return valor >= 10 && valor <= 5000;
      },
      message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido {VALUE}"
    },
  },
});

const livros = mongoose.model("livros", livroSchema);

export default livros;
