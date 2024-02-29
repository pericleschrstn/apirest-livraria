import book from "../models/Book.js";

class BookController {
  static async getBooks(req, res) {
    const listBooks = await book.find({});
    res.status(200).json(listBooks);
  }

  static async postBooks(req, res) {
    try {
      const newBook = await book.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", book: newBook });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao cadastrar livro` });
    }
  }
}

export default BookController;
