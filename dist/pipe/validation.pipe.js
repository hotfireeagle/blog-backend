"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const response_1 = require("../constant/response");
let ValidationPipe = class ValidationPipe {
    pass(metaType) {
        const whiteList = [String, Number, Boolean, Object, Array];
        return whiteList.includes(metaType);
    }
    errorStringify(errors) {
        const result = [];
        errors.map(errObj => {
            const errDescObj = errObj.constraints;
            Object.keys(errDescObj).map(key => { result.push(errDescObj[key]); });
        });
        return result.join('-');
    }
    async transform(value, metadata) {
        const metaType = metadata.metatype;
        if (!metaType || this.pass(metaType)) {
            return value;
        }
        const object = class_transformer_1.plainToClass(metaType, value);
        const errors = await class_validator_1.validate(object);
        if (errors.length > 0) {
            const message = this.errorStringify(errors);
            throw new common_1.HttpException({ status: response_1.ErrorStatus, message }, common_1.HttpStatus.OK);
        }
        return value;
    }
};
ValidationPipe = __decorate([
    common_1.Injectable()
], ValidationPipe);
exports.ValidationPipe = ValidationPipe;
//# sourceMappingURL=validation.pipe.js.map