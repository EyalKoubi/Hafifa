"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizsSchema = void 0;
// import mongoose
const mongoose_1 = __importDefault(require("mongoose"));
// export group schema
exports.quizsSchema = new mongoose_1.default.Schema({
    question: {
        type: String,
    },
    options: {
        type: [String],
        validate: {
            validator: function (options) {
                return options.length === 4;
            },
            message: "options must contain exactly 4 elements",
        },
    },
    correct: {
        type: Number,
        min: 1,
        max: 4,
    },
});
