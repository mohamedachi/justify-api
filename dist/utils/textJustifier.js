"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justifyText = justifyText;
function justifyText(text, lineLength = 80) {
    const words = text.split(/\s+/);
    const lines = [];
    let currentLine = [];
    words.forEach(word => {
        const lineCandidate = [...currentLine, word].join(' ');
        if (lineCandidate.length <= lineLength) {
            // If adding the word keeps the line within the limit, add it to the current line
            currentLine.push(word);
        }
        else {
            // Line is ready, justify it
            lines.push(justifyLine(currentLine, lineLength));
            currentLine = [word];
        }
    });
    // Justify the last line (left-aligned)
    if (currentLine.length > 0)
        lines.push(currentLine.join(' '));
    return lines.join('\n');
}
// Function to justify a single line by evenly adding spaces between words
function justifyLine(words, lineLength) {
    if (words.length === 1)
        return words[0]; // Single word case, return as is
    let line = words.join(' ');
    const spacesToAdd = lineLength - line.length;
    const gapCount = words.length - 1;
    const spaces = Array(gapCount).fill(Math.floor(spacesToAdd / gapCount));
    // Distribute remaining spaces
    for (let i = 0; i < spacesToAdd % gapCount; i++) {
        spaces[i] += 1;
    }
    // Create justified line by adding spaces between words
    return words.reduce((acc, word, i) => acc + word + (spaces[i] ? ' '.repeat(spaces[i]) : ''), '');
}
