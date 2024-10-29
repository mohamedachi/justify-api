export function justifyText(text: string, lineLength: number = 80): string {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let currentLine: string[] = [];

  words.forEach(word => {
    const lineCandidate = [...currentLine, word].join(' ');
    
    if (lineCandidate.length <= lineLength) {
      currentLine.push(word);
    } else {
      lines.push(justifyLine(currentLine, lineLength));
      currentLine = [word];
    }
  });

  if (currentLine.length > 0) lines.push(currentLine.join(' '));

  return lines.join('\n');
}

function justifyLine(words: string[], lineLength: number): string {
  if (words.length === 1) return words[0]; 

  let line = words.join(' ');
  const spacesToAdd = lineLength - line.length;
  const gapCount = words.length - 1;
  const spaces = Array(gapCount).fill(Math.floor(spacesToAdd / gapCount));
  
  for (let i = 0; i < spacesToAdd % gapCount; i++) {
    spaces[i] += 1;
  }
  return words.reduce((acc, word, i) => 
    acc + word + (spaces[i] ? ' '.repeat(spaces[i]) : ''), ''
  );
}
