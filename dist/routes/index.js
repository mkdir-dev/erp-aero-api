"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_1 = __importDefault(require("../controllers/user/signup"));
const notfound_1 = __importDefault(require("../controllers/other/notfound"));
const router = express_1.default.Router();
router.post('/signup', signup_1.default);
router.get('*', notfound_1.default);
router.post('*', notfound_1.default);
router.put('*', notfound_1.default);
router.patch('*', notfound_1.default);
router.delete('*', notfound_1.default);
exports.default = router;
