"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminsSchema = void 0;
// import mongoose
const mongoose_1 = __importDefault(require("mongoose"));
// export group schema
exports.adminsSchema = new mongoose_1.default.Schema({
    full_name: String,
    user_name: String,
    password: String,
});
