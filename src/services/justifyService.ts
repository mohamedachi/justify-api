export function justifyText(text: string, lineLength: number = 80): string {
  const words = text.split(/\s+/); // Split text into words by spaces
  let currentLine: string[] = [];
  let lines: string[] = [];
  let currentLineLength = 0;

  // Build lines of justified text
  for (const word of words) {
    // Check if adding the word exceeds the line length
    if (currentLineLength + word.length + currentLine.length <= lineLength) {
      currentLine.push(word);
      currentLineLength += word.length;
    } else {
      lines.push(justifyLine(currentLine, lineLength)); // Justify the current line
      currentLine = [word];
      currentLineLength = word.length;
    }
  }

  // Add the last line as-is without justification if it contains words
  if (currentLine.length > 0) {
    lines.push(currentLine.join(" "));
  }

  return lines.join("\n"); // Join all lines with new lines for the final justified text
}

// Function to justify a single line of words
function justifyLine(words: string[], lineLength: number): string {
  if (words.length === 1) return words[0]; // No justification needed for a single word

  const totalWordsLength = words.reduce((sum, word) => sum + word.length, 0);
  let totalSpaces = lineLength - totalWordsLength;
  const gaps = words.length - 1;

  // Distribute spaces as evenly as possible
  const spaces = Array(gaps).fill(Math.floor(totalSpaces / gaps));
  for (let i = 0; i < totalSpaces % gaps; i++) {
    spaces[i]++;
  }

  // Combine words and spaces to form the justified line
  return words.reduce((line, word, index) => {
    return index < gaps ? line + word + " ".repeat(spaces[index]) : line + word;
  }, "");
}
