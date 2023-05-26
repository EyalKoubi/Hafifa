"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = void 0;
// imports
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const Models_1 = require("./Models");
const Routers_1 = require("./Routers");
const Routers_2 = require("./Routers");
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// define function for connect
// to the Data Base
const connectToDb = async () => {
    try {
        await mongoose_1.default.connect("mongodb://127.0.0.1/myDB");
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log("Error connecting to MongoDB:");
    }
};
exports.connectToDb = connectToDb;
// define function for using
// the routers of the application
const use = () => {
    app.use(express_1.default.json());
    app.use("/users", Routers_1.user_router);
    app.use("/quizs", Routers_2.quiz_router);
    app.use((res, next) => {
        addHaders(res, next);
    });
    app.use((0, cors_1.default)());
};
// define function for create indexes
// for the relations and for aggretion
const indexes = () => {
    Models_1.Users.collection.createIndex({ full_name: 1 });
};
// define main function
// for activate the app
const main = () => {
    use();
    (0, exports.connectToDb)();
    indexes();
    app.listen(config_1.PORT, () => console.log(`Server is now listening on port ${config_1.PORT}`));
};
// activate the app
main();
function addHaders(res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
}
