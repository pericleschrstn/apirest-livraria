import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/livros", BookController.getBooks);
routes.get("/livros/:id", BookController.getBook);
routes.post("/livros", BookController.postBooks);
routes.put("/livros/:id", BookController.putBook);
routes.delete("/livros/:id", BookController.deleteBook);

export default routes;
