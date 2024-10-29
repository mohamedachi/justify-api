import express, { Request, Response, NextFunction, RequestHandler } from 'express';
import { generateToken } from './controllers/authController';
import { justifyTextController } from './controllers/textController';
import { authenticateToken } from './middlewares/authMiddleware';
import { rateLimiter } from './middlewares/rateLimiter';

const router = express.Router();

// Define route handlers as RequestHandler types
const tokenHandler: RequestHandler = (req: Request, res: Response, next: NextFunction): void => {
  try {
    generateToken(req, res);
  } catch (error) {
    next(error);
  }
};

const justifyHandler: RequestHandler = (req: Request, res: Response, next: NextFunction): void => {
  try {
    justifyTextController(req, res);
  } catch (error) {
    next(error);
  }
};

// Routes with middleware and explicit RequestHandler functions
router.post('/token', tokenHandler);
router.post('/justify', authenticateToken as RequestHandler, rateLimiter as RequestHandler, justifyHandler);

export default router;
