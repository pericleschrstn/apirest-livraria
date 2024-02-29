import { author } from "../models/Author.js";

class AuthorController {
  static async getAuthors(req, res) {
    try {
      const listAuthors = await author.find({});
      res.status(200).json(listAuthors);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha na requisição` });
    }
  }

  static async getAuthor(req, res) {
    try {
      const id = req.params.id;
      const listAuthor = await author.findById(id);
      res.status(200).json(listAuthor);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Autor não encontrado` });
    }
  }

  static async postAuthors(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({ message: "Autor criado com sucesso", author: newAuthor });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao cadastrar autor` });
    }
  }

  static async putAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Não foi possível atualizar o autor` });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "Autor excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Não foi possível excluir o autor` });
    }
  }
}

export default AuthorController;
