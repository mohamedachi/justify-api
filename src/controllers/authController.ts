import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export function generateToken(req: Request, res: Response) {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const token = jwt.sign({ email }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
  res.json({ token });
}
