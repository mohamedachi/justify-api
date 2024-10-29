"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = getToken;
exports.isValidToken = isValidToken;
const tokenUtils_1 = require("../utils/tokenUtils");
const tokens = new Set();
function getToken(req, res) {
    const email = req.body.email;
    if (!email)
        return res.status(400).json({ error: "Email is required" });
    const token = (0, tokenUtils_1.generateToken)();
    tokens.add(token);
    res.status(201).json({ token });
}
function isValidToken(token) {
    return tokens.has(token);
}
