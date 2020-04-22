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
const tag_service_1 = require("./tag.service");
const tag_dto_1 = require("./tag.dto");
const auth_guard_1 = require("../../guard/auth.guard");
let TagController = class TagController {
    constructor(tagService) {
        this.tagService = tagService;
    }
    async create(tagObj) {
        return await this.tagService.newTagService(tagObj);
    }
    getAll() {
        return this.tagService.findAllTags();
    }
    deleteTag(tagId) {
        return this.tagService.deleteTagService(tagId);
    }
};
__decorate([
    common_1.Post('/new'),
    common_1.UseGuards(auth_guard_1.JwtAuthGuard),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tag_dto_1.CreateTagDto]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "create", null);
__decorate([
    common_1.Get('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TagController.prototype, "getAll", null);
__decorate([
    common_1.Delete('/:tagId'),
    common_1.UseGuards(auth_guard_1.JwtAuthGuard),
    __param(0, common_1.Param('tagId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TagController.prototype, "deleteTag", null);
TagController = __decorate([
    common_1.Controller('tag'),
    __metadata("design:paramtypes", [tag_service_1.TagService])
], TagController);
exports.TagController = TagController;
//# sourceMappingURL=tag.controller.js.map