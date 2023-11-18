import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {
  Length,
  Min,
  Max,
} from "class-validator";
import { v4 as uuid } from "uuid";

@Entity("gateway")
class Gateway {

  @PrimaryColumn()
  id: string;

  @Column({unique: true})
  @Min(5)
  @Max(10)
  serial: string;

  @Column()
  @Length(3, 20)
  name: string;

  @Column({unique: true})
  ip: string;

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

export { Gateway };