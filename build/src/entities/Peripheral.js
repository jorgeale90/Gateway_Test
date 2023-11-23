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
exports.Peripheral = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Gateway_1 = require("./Gateway");
let Peripheral = class Peripheral {
    constructor() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Peripheral.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    class_validator_1.Min(3),
    class_validator_1.Max(10),
    __metadata("design:type", Number)
], Peripheral.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column(),
    class_validator_1.Length(3, 20),
    __metadata("design:type", String)
], Peripheral.prototype, "vendor", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Peripheral.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Gateway_1.Gateway, gateway => gateway.peripheral),
    class_validator_1.Length(1, 10),
    __metadata("design:type", Gateway_1.Gateway)
], Peripheral.prototype, "gateway", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Peripheral.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Peripheral.prototype, "updated_at", void 0);
Peripheral = __decorate([
    typeorm_1.Entity("peripheral"),
    __metadata("design:paramtypes", [])
], Peripheral);
exports.Peripheral = Peripheral;
