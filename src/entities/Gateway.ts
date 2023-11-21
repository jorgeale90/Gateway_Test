import { Length, Max, Min } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Peripheral } from "./Peripheral";

@Entity("gateway")
class Gateway {

  @PrimaryColumn()
  id: string;

  @Column({ unique: true })
  @Min(5)
  @Max(10)
  serial: string;

  @Column()
  @Length(3, 20)
  name: string;

  @Column({ unique: true })
  ip: string;

  @OneToMany(() => Peripheral, peripheral => peripheral.gateway)
  peripheral: Peripheral[];

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