// imports
import mongoose from "mongoose";
import { usersSchema } from "./Users";
import { quizsSchema } from "./Quizs";

// exports
export const Users = mongoose.model("Users", usersSchema);
export const Quizs = mongoose.model("Quizs", quizsSchema);
