"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoard = exports.createBoard = exports.getBoards = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getBoards = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.boards.findMany();
});
exports.getBoards = getBoards;
const createBoard = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.boards.create({
        data: {
            name
        }
    });
});
exports.createBoard = createBoard;
const deleteBoard = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.boards.delete({
        where: {
            id
        }
    });
});
exports.deleteBoard = deleteBoard;
//# sourceMappingURL=boardServices.js.map