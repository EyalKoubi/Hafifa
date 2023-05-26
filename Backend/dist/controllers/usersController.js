"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.isAdmin = void 0;
const checks = __importStar(require("../types_checks"));
const Models_1 = require("../Models");
async function isAdmin(req, res) {
    const body = req.body;
    if (!checks.userInputsSchema.validate(body))
        return res.status(400).json({ message: "Inappropriate input" });
    const user = await Models_1.Users.findOne({
        user_name: body.user_name,
        password: body.password,
    });
    if (!user)
        return res.send("0");
    if (user.isAdmin)
        return res.send("1");
    return res.send("2");
}
exports.isAdmin = isAdmin;
async function create(req, res) {
    const body = req.body;
    await Models_1.Users.insertMany([body]);
    return res.send("The admin: " + body.full_name + " added successfully!");
}
exports.create = create;
