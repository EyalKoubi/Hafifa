import * as checks from "../types_checks";
import { Quizs } from "../Models";

export async function create(req: any, res: any) {
  const body = req.body;
  if (!checks.quizsSchema.validate(body))
    return res.status(400).json({ message: "Invalid input" });
  await Quizs.insertMany([body]);
  return res.send("The quiz: " + body + " added successfully!");
}

export async function isFound(req: any, res: any) {
  const question = req.query.question;
  if (!question) return res.status(400).json({ message: "Invalid input" });
  const exists = await Quizs.findOne({ question: question });
  if (exists) return res.send("true");
  return res.send("false");
}
export async function getQ(res: any) {
  const objects = await Quizs.find({});
  return res.send(objects);
}

export async function getSQ(req: any, res: any) {
  if (!req.query.question)
    return res.status(400).json({ message: "Invalid input" });
  const details = await Quizs.findOne({ question: req.query.question });
  return res.send(details);
}

export async function update(req: any, res: any) {
  if (!req.params.id && !req.body)
    return res.status(400).json({ message: "Invalid input" });
  const ID = req.params.id;
  const body = req.body;
  const newQuiz = await Quizs.findByIdAndUpdate(ID, body, {
    new: true,
  });
  if (newQuiz) return res.send(newQuiz);
  return res.send({ message: "error" });
}
export async function deleteq(req: any, res: any) {
  if (!req.params.id) return res.status(400).json({ message: "Invalid input" });
  await Quizs.findByIdAndDelete(req.params.id);
  return res.send("Item removed successfully");
}
