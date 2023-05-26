"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quizs = exports.Users = void 0;
// imports
const mongoose_1 = __importDefault(require("mongoose"));
const Users_1 = require("./Users");
const Quizs_1 = require("./Quizs");
// exports
exports.Users = mongoose_1.default.model("Users", Users_1.usersSchema);
exports.Quizs = mongoose_1.default.model("Quizs", Quizs_1.quizsSchema);
