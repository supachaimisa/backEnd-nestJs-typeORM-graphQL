import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class createMessages1585025829086 implements MigrationInterface {
    private table;
    private foreignKey;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
