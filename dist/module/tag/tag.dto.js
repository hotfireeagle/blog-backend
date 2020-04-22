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
const class_validator_1 = require("class-validator");
class CreateTagDto {
}
__decorate([
    class_validator_1.IsNotEmpty({ message: '标签不能为空' }),
    class_validator_1.MinLength(1, { message: '标签名至少１位' }),
    class_validator_1.MaxLength(10, { message: '标签名最多10位' }),
    __metadata("design:type", String)
], CreateTagDto.prototype, "name", void 0);
exports.CreateTagDto = CreateTagDto;
//# sourceMappingURL=tag.dto.js.map