"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataLoader = require("dataloader");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../models/user.entity");
const batchUsers = async (userIds) => {
    const users = await typeorm_1.getRepository(user_entity_1.default).findByIds(userIds);
    const userIdMap = {};
    users.forEach(user => {
        userIdMap[user.id] = user;
    });
    return userIds.map(userId => userIdMap[userId]);
};
exports.default = () => new DataLoader(batchUsers);
//# sourceMappingURL=UserLoader.js.map