"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiter = rateLimiter;
const tokenUsage = {};
function rateLimiter(req, res, next) {
    var _a;
    const token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token)
        return res.status(401).json({ error: 'Unauthorized' });
    // Check if req.body is defined and contains text
    if (typeof req.body !== 'string' || !req.body.trim()) {
        return res.status(400).json({ error: 'Invalid input. Text is required in the request body.' });
    }
    const currentCount = tokenUsage[token] || 0;
    const wordCount = req.body.split(/\s+/).length;
    if (currentCount + wordCount > 80000) {
        return res.status(402).json({ error: 'Payment Required' });
    }
    tokenUsage[token] = currentCount + wordCount;
    next();
}
