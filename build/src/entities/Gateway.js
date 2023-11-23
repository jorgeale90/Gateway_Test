"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gateway = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Peripheral_1 = require("./Peripheral");
let Gateway = class Gateway {
    constructor() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Gateway.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    class_validator_1.Min(5),
    class_validator_1.Max(10),
    __metadata("design:type", String)
], Gateway.prototype, "serial", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(3, 20),
    __metadata("design:type", String)
], Gateway.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], Gateway.prototype, "ip", void 0);
__decorate([
    typeorm_1.OneToMany(() => Peripheral_1.Peripheral, peripheral => peripheral.gateway),
    __metadata("design:type", Array)
], Gateway.prototype, "peripheral", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Gateway.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Gateway.prototype, "updated_at", void 0);
Gateway = __decorate([
    typeorm_1.Entity("gateway"),
    __metadata("design:paramtypes", [])
], Gateway);
exports.Gateway = Gateway;
