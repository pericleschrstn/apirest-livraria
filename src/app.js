import express from "express";
import connectDatabase from "./config/dbConnect.js";
import book from "./models/Book.js";

const connection = await connectDatabase();

connection.on("error", (erro) => {
  console.error("Erro de conexão: ", erro);
});

connection.once("open", () => {
  console.log("Conexão realizada com sucesso");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
  const listBooks = await book.find({});
  res.status(200).json(listBooks);
});

app.get("/livros/:id", (req, res) => {
  const index = getLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  const index = getLivro(req.params.id);
  livros[index].title = req.body.title;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = getLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso");
});

export default app;
