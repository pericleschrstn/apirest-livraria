import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/autores", AuthorController.getAuthors);
routes.get("/autores/:id", AuthorController.getAuthor);
routes.post("/autores", AuthorController.postAuthors);
routes.put("/autores/:id", AuthorController.putAuthor);
routes.delete("/autores/:id", AuthorController.deleteAuthor);

export default routes;
