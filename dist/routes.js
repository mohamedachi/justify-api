"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("./controllers/authController");
const textController_1 = require("./controllers/textController");
const authMiddleware_1 = require("./middlewares/authMiddleware");
const rateLimiter_1 = require("./middlewares/rateLimiter");
const router = express_1.default.Router();
// Define route handlers as RequestHandler types
const tokenHandler = (req, res, next) => {
    try {
        (0, authController_1.generateToken)(req, res);
    }
    catch (error) {
        next(error);
    }
};
const justifyHandler = (req, res, next) => {
    try {
        (0, textController_1.justifyTextController)(req, res);
    }
    catch (error) {
        next(error);
    }
};
// Routes with middleware and explicit RequestHandler functions
router.post('/token', tokenHandler);
router.post('/justify', authMiddleware_1.authenticateToken, rateLimiter_1.rateLimiter, justifyHandler);
exports.default = router;
