"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const options = {
    type: 'sqlite',
    database: 'data/shopee.db',
    logging: true,
    entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
    migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
};
module.exports = options;
//# sourceMappingURL=orm.js.map