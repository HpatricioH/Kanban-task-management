"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from 'cors'
const dotenv_1 = __importDefault(require("dotenv"));
const boardRoutes_1 = require("./v1/routes/boardRoutes");
const bodyParser = require('body-parser');
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT, 10) || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});
// Routes
app.use('/api/v1/boards', boardRoutes_1.boardRouter);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
});
// // Middleware
// app.use(cors())
app.listen(PORT, () => {
    console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map