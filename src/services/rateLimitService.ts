type TokenData = {
    wordCount: number;
    lastReset: Date;
  };
  
  const tokenUsage: Record<string, TokenData> = {};
  
  export function incrementWordCount(token: string, wordCount: number): boolean {
    const today = new Date();
    if (!tokenUsage[token] || (today.getDate() !== tokenUsage[token].lastReset.getDate())) {
      tokenUsage[token] = { wordCount: 0, lastReset: today };
    }
  
    tokenUsage[token].wordCount += wordCount;
    
    return tokenUsage[token].wordCount <= 80000;
  }
  
  export function resetDailyLimits() {
    for (const token in tokenUsage) {
      tokenUsage[token].wordCount = 0;
      tokenUsage[token].lastReset = new Date();
    }
  }
  