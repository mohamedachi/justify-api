import { Request, Response } from 'express';
import { justifyText } from '../utils/textJustifier';

export function justifyTextController(req: Request, res: Response) {
  const text = req.body as string;
  const justifiedText = justifyText(text);
  res.type('text/plain').send(justifiedText);
}
