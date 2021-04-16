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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pubSub = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const repo_service_1 = require("../repo.service");
const message_entity_1 = require("../db/models/message.entity");
const message_input_1 = require("./input/message.input");
const user_entity_1 = require("../db/models/user.entity");
const loaders_1 = require("../db/loaders");
exports.pubSub = new graphql_subscriptions_1.PubSub();
let MessageResolver = class MessageResolver {
    constructor(repoService) {
        this.repoService = repoService;
    }
    async getMessages() {
        return this.repoService.messageRepo.find();
    }
    async getMessagesFromUser(userId) {
        return this.repoService.messageRepo.find({
            where: { userId },
        });
    }
    async getMessage(id) {
        return this.repoService.messageRepo.findOne(id);
    }
    async createMessage(input) {
        const message = this.repoService.messageRepo.create({
            userId: input.userId,
            content: input.content,
        });
        const response = await this.repoService.messageRepo.save(message);
        exports.pubSub.publish('messageAdded', { messageAdded: message });
        return response;
    }
    async deleteMessage(input) {
        const message = await this.repoService.messageRepo.findOne(input.id);
        if (!message || message.userId !== input.userId)
            throw new Error('Message does not exists or you are not the message author');
        const copy = Object.assign({}, message);
        await this.repoService.messageRepo.remove(message);
        return copy;
    }
    messageAdded() {
        return exports.pubSub.asyncIterator('messageAdded');
    }
    async getUser(parent, { UserLoader }) {
        return UserLoader.load(parent.userId);
    }
};
__decorate([
    graphql_1.Query(() => [message_entity_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "getMessages", null);
__decorate([
    graphql_1.Query(() => [message_entity_1.default]),
    __param(0, graphql_1.Args('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "getMessagesFromUser", null);
__decorate([
    graphql_1.Query(() => message_entity_1.default, { nullable: true }),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "getMessage", null);
__decorate([
    graphql_1.Mutation(() => message_entity_1.default),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_input_1.default]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "createMessage", null);
__decorate([
    graphql_1.Mutation(() => message_entity_1.default),
    __param(0, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_input_1.DeleteMessageInput]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "deleteMessage", null);
__decorate([
    graphql_1.Subscription(() => message_entity_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MessageResolver.prototype, "messageAdded", null);
__decorate([
    graphql_1.ResolveField(() => user_entity_1.default, { name: 'user' }),
    __param(0, graphql_1.Parent()),
    __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_entity_1.default, Object]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "getUser", null);
MessageResolver = __decorate([
    graphql_1.Resolver(() => message_entity_1.default),
    __metadata("design:paramtypes", [repo_service_1.default])
], MessageResolver);
exports.default = MessageResolver;
//# sourceMappingURL=message.resolver.js.map