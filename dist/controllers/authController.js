"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = generateToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateToken(req, res) {
    const { email } = req.body;
    if (!email)
        return res.status(400).json({ error: 'Email is required' });
    const token = jsonwebtoken_1.default.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
}
