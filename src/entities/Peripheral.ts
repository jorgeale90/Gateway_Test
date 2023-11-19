import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {
    Length,
    Min,
    Max,
} from "class-validator";
import { v4 as uuid } from "uuid";
import {Gateway} from "./Gateway";

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

    @ManyToOne(() => Gateway, gateway => gateway.peripheral)
    @Length(1, 10)
    gateway: Gateway;

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