// imports
import express from "express";
import mongoose from "mongoose";
import { Users } from "./Models";
import { user_router } from "./Routers";
import { quiz_router } from "./Routers";
import cors from "cors";
import { PORT } from "./config";
const app = express();
app.use(cors());

// define function for connect
// to the Data Base
export const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/myDB");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:");
  }
};

// define function for using
// the routers of the application
const use = () => {
  app.use(express.json());
  app.use("/users", user_router);
  app.use("/quizs", quiz_router);
  app.use((res, next) => {
    addHaders(res, next);
  });
  app.use(cors());
};

// define function for create indexes
// for the relations and for aggretion
const indexes = () => {
  Users.collection.createIndex({ full_name: 1 });
};

// define main function
// for activate the app
const main = () => {
  use();
  connectToDb();
  indexes();

  app.listen(PORT, () =>
    console.log(`Server is now listening on port ${PORT}`)
  );
};

// activate the app
main();

function addHaders(res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
}
