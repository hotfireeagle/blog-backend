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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tag_entity_1 = require("./tag.entity");
const response_1 = require("../../constant/response");
let TagService = class TagService {
    constructor(tagRepo) {
        this.tagRepo = tagRepo;
    }
    findTagByName(name) {
        return this.tagRepo.findOne({ name });
    }
    async newTagService(tag) {
        const tagObj = await this.findTagByName(tag.name);
        if (!tagObj) {
            const result = await this.tagRepo.save(tag);
            return { status: response_1.SuccessStatus, message: '成功创建', data: result };
        }
        else {
            return { status: response_1.ErrorStatus, message: '该标签已存在', data: null };
        }
    }
    async findAllTags() {
        const data = await this.tagRepo.find();
        return { status: response_1.SuccessStatus, message: 'ok', data };
    }
    async deleteTagService(tagId) {
        await this.tagRepo.delete(tagId);
        return { status: response_1.SuccessStatus, message: '删除成功' };
    }
};
TagService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TagService);
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map