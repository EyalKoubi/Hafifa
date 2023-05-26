"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizsSchema = exports.userInputsSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userInputsSchema = joi_1.default.object({
    user_name: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
});
exports.quizsSchema = joi_1.default.object({
    question: joi_1.default.string().required(),
    options: joi_1.default.array().items(joi_1.default.string()).length(4).required().messages({
        "array.base": "options must be an array",
        "array.length": "options must contain exactly 4 elements",
    }),
    correct: joi_1.default.number().integer().min(1).max(4).required(),
});
