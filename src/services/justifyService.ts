export function justifyText(text: string, lineLength: number = 80): string {
  const words = text.split(/\s+/); 
  let currentLine: string[] = [];
  let lines: string[] = [];
  let currentLineLength = 0;


  for (const word of words) {
     if (currentLineLength + word.length + currentLine.length <= lineLength) {
      currentLine.push(word);
      currentLineLength += word.length;
    } else {
      lines.push(justifyLine(currentLine, lineLength)); 
      currentLine = [word];
      currentLineLength = word.length;
    }
  }

  if (currentLine.length > 0) {
    lines.push(currentLine.join(" "));
  }

  return lines.join("\n"); 
}


function justifyLine(words: string[], lineLength: number): string {
  if (words.length === 1) return words[0]; 

  const totalWordsLength = words.reduce((sum, word) => sum + word.length, 0);
  let totalSpaces = lineLength - totalWordsLength;
  const gaps = words.length - 1;


  const spaces = Array(gaps).fill(Math.floor(totalSpaces / gaps));
  for (let i = 0; i < totalSpaces % gaps; i++) {
    spaces[i]++;
  }


  return words.reduce((line, word, index) => {
    return index < gaps ? line + word + " ".repeat(spaces[index]) : line + word;
  }, "");
}
