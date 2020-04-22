"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const app_entity_1 = require("./app.entity");
const validation_pipe_1 = require("./pipe/validation.pipe");
const user_module_1 = require("./module/user/user.module");
const tag_module_1 = require("./module/tag/tag.module");
const article_module_1 = require("./module/article/article.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mariadb',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '6666',
                database: 'blog',
                entities: app_entity_1.entities,
                synchronize: true,
            }),
            user_module_1.UserModule,
            tag_module_1.TagModule,
            article_module_1.ArticleModule,
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_PIPE,
                useClass: validation_pipe_1.ValidationPipe
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map