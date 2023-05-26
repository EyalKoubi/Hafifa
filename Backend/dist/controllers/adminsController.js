"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.isFound = void 0;
const Models_1 = require("../Models");
async function isFound(body, res) {
    const user = await Models_1.Admins.findOne({
        user_name: body.user_name,
        password: body.password,
    });
    if (user)
        return res.send("true");
    return res.send("false");
}
exports.isFound = isFound;
async function create(body, res) {
    await Models_1.Admins.insertMany([body]);
    return res.send("The admin: " + body.full_name + " added successfully!");
}
exports.create = create;
