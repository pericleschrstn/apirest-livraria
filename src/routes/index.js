import express from "express";
import livros from "./booksRoutes.js";
import autores from "./authorsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  app.use(express.json(), livros, autores);
};

export default routes;
