"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementWordCount = incrementWordCount;
exports.resetDailyLimits = resetDailyLimits;
const tokenUsage = {};
function incrementWordCount(token, wordCount) {
    const today = new Date();
    if (!tokenUsage[token] || (today.getDate() !== tokenUsage[token].lastReset.getDate())) {
        tokenUsage[token] = { wordCount: 0, lastReset: today };
    }
    tokenUsage[token].wordCount += wordCount;
    return tokenUsage[token].wordCount <= 80000;
}
function resetDailyLimits() {
    for (const token in tokenUsage) {
        tokenUsage[token].wordCount = 0;
        tokenUsage[token].lastReset = new Date();
    }
}
