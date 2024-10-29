import { Request, Response, NextFunction } from 'express';

const tokenUsage: Record<string, number> = {};

export function rateLimiter(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });


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
