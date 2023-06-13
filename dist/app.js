"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const phones_1 = require("./controllers/phones");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.get('/phones', phones_1.getAllPhones);
app.get('/phones/:phoneId', phones_1.getPhoneById);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
