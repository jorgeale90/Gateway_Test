import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePeripheral1624747881679 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "peripheral",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "uid",
                        type: "number",
                        isUnique: true
                    },
                    {
                        name: "vendor",
                        type: "varchar"
                    },
                    {
                        name: "status",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("peripheral");
    }

}
