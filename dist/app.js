"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const phones_1 = require("./controllers/phones");
const cors_1 = __importDefault(require("cors"));
const authRouter_1 = require("./routes/authRouter");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(authRouter_1.authRouter);
app.get('/phones', phones_1.getAllPhones);
app.get('/phones/:phoneId', phones_1.getPhoneById);
app.get('/products/:phoneId', phones_1.getPhoneAboutById);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
