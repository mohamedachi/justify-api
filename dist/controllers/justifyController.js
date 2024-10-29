"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justify = justify;
const justifyService_1 = require("../services/justifyService");
const rateLimitService_1 = require("../services/rateLimitService");
const tokenController_1 = require("./tokenController");
function justify(req, res) {
    const token = req.headers.authorization;
    const text = req.body;
    if (typeof text !== 'string') {
        res.status(400).json({ error: 'Bad Request: Expected text input as a string' });
        return;
    }
    if (!token || !(0, tokenController_1.isValidToken)(token)) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }
    const wordCount = text.split(/\s+/).length;
    if (!(0, rateLimitService_1.incrementWordCount)(token, wordCount)) {
        res.status(402).json({ error: "Payment Required - daily limit reached" });
        return;
    }
    const justifiedText = (0, justifyService_1.justifyText)(text);
    res.setHeader("Content-Type", "text/plain");
    res.send(justifiedText);
}
