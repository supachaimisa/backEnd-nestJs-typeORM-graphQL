"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessages1585025829086 = void 0;
const typeorm_1 = require("typeorm");
class createMessages1585025829086 {
    constructor() {
        this.table = new typeorm_1.Table({
            name: 'messages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'user_id',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'content',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamptz',
                    isPrimary: false,
                    isNullable: false,
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamptz',
                    isPrimary: false,
                    isNullable: false,
                    default: 'now()',
                },
            ],
        });
        this.foreignKey = new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            referencedTableName: 'users',
        });
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }
}
exports.createMessages1585025829086 = createMessages1585025829086;
//# sourceMappingURL=1585025829086-create-messages.js.map