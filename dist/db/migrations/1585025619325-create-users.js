"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers1585025619325 = void 0;
const typeorm_1 = require("typeorm");
class createUsers1585025619325 {
    constructor() {
        this.table = new typeorm_1.Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '255',
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamptz',
                    isNullable: false,
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamptz',
                    isNullable: false,
                    default: 'now()',
                },
            ],
        });
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }
}
exports.createUsers1585025619325 = createUsers1585025619325;
//# sourceMappingURL=1585025619325-create-users.js.map