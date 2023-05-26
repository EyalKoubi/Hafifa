import { Router } from "express";
import * as contQuiz from "../controllers/quizsController";

export const quiz_router = Router();

quiz_router.post("/create", async (req, res) => {
  return await contQuiz.create(req, res);
});

quiz_router.get("/isFound", async (req, res) => {
  return await contQuiz.isFound(req, res);
});

quiz_router.get("/getSingleQuestion", async (req, res) => {
  return await contQuiz.getSQ(req, res);
});

quiz_router.get("/getQuestions", async (req, res) => {
  return await contQuiz.getQ(res);
});

quiz_router.patch("/update/:id", async (req, res) => {
  return await contQuiz.update(req, res);
});

quiz_router.delete("/delete/:id", async (req, res) => {
  return await contQuiz.deleteq(req, res);
});
