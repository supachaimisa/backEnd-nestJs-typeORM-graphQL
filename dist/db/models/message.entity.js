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
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let Message = class Message {
};
__decorate([
    graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Message.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column({ name: 'user_id' }),
    __metadata("design:type", Number)
], Message.prototype, "userId", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Message.prototype, "content", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.CreateDateColumn({ name: 'created_at' }),
    __metadata("design:type", Date)
], Message.prototype, "createdAt", void 0);
__decorate([
    graphql_1.Field(),
    typeorm_1.UpdateDateColumn({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Message.prototype, "updatedAt", void 0);
__decorate([
    graphql_1.Field(() => user_entity_1.default),
    __metadata("design:type", user_entity_1.default)
], Message.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.default, user => user.messageConnection, { primary: true }),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", Promise)
], Message.prototype, "userConnection", void 0);
Message = __decorate([
    graphql_1.ObjectType(),
    typeorm_1.Entity({ name: 'messages' })
], Message);
exports.default = Message;
//# sourceMappingURL=message.entity.js.map