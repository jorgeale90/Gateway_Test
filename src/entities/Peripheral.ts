import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {
    Length,
    Min,
    Max,
} from "class-validator";
import { v4 as uuid } from "uuid";

@Entity("peripheral")
class Peripheral {

    @PrimaryColumn()
    id: string;

    @Column({unique: true})
    @Min(3)
    @Max(10)
    uid: number;

    @Column()
    @Length(3, 20)
    vendor: string;

    @Column()
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { Peripheral };