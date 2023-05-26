import { Router } from "express";
import * as contUser from "../controllers/usersController";

export const user_router = Router();

user_router.post("/create", async (req, res) => {
  await contUser.create(req, res);
});

user_router.post("/isAdmin", async (req, res) => {
  await contUser.isAdmin(req, res);
});
