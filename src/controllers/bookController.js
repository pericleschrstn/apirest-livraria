import { author } from "../models/Author.js";
import book from "../models/Book.js";

class BookController {
  static async getBooks(req, res) {
    try {
      const listBooks = await book.find({});
      res.status(200).json(listBooks);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha na requisição` });
    }
  }

  static async getBook(req, res) {
    try {
      const id = req.params.id;
      const listBook = await book.findById(id);
      res.status(200).json(listBook);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Livro não encontrado` });
    }
  }

  static async postBooks(req, res) {
    const newBook = req.body;
    try {
      const authorFound = await author.findById(newBook.author);
      const bookComplete = { ...newBook, author: { ...authorFound._doc } };
      const bookCreated = await book.create(bookComplete);
      res.status(201).json({ message: "Livro criado com sucesso", book: bookCreated });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao cadastrar livro` });
    }
  }

  static async putBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Não foi possível atualizar o livro` });
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Não foi possível excluir o livro` });
    }
  }

  static async getBooksByEditora(req, res) {
    const editora = req.query.editora;
    try {
      const booksByEditora = await book.find({ editora: editora });
      res.status(200).json(booksByEditora);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha na busca` });
    }
  }
}

export default BookController;
