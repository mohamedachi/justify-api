"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justifyTextController = justifyTextController;
const textJustifier_1 = require("../utils/textJustifier");
function justifyTextController(req, res) {
    const text = req.body;
    const justifiedText = (0, textJustifier_1.justifyText)(text);
    res.type('text/plain').send(justifiedText);
}
