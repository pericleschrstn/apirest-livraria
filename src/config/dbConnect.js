// mongodb+srv://pericleschrstn:<password>@cluster0.hamfrli.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import mongoose from "mongoose";

async function connectDatabase() {
  mongoose.connect(
    "mongodb+srv://pericleschrstn:mD1NK4eXl5DqP3J3@cluster0.hamfrli.mongodb.net/livraria/?retryWrites=true&w=majority&appName=Cluster0"
  );
  return mongoose.connection;
}

export default connectDatabase;
