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
    try {
      const newBook = await book.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", book: newBook });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao cadastrar livro` });
    }
  }

  static async putBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Livro não atualizado` });
    }
  }
}

export default BookController;
