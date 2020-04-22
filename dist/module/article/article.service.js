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
const article_entity_1 = require("./article.entity");
const response_1 = require("../../constant/response");
const index_1 = require("../../util/index");
let ArticleService = class ArticleService {
    constructor(articleRepo) {
        this.articleRepo = articleRepo;
    }
    async newArticleService(articleObj) {
        const date = index_1.dateStr();
        const articleInstance = Object.assign(Object.assign({}, articleObj), { tags: articleObj.tags.map(tagId => ({ id: tagId })), date });
        try {
            const result = await this.articleRepo.save(articleInstance);
            return { status: response_1.SuccessStatus, data: result, message: '成功创建' };
        }
        catch (err) {
            return { status: response_1.ErrorStatus, data: null, message: '发生错误' };
        }
    }
    async fetchArticleService(queryObj) {
        !queryObj.page && (queryObj.page = 0);
        !queryObj.pageSize && (queryObj.pageSize = 10);
        const skip = queryObj.page * queryObj.pageSize;
        if (queryObj.tagId) {
            return this.fetchArticleWithTag(skip, queryObj.pageSize, queryObj.tagId);
        }
        const [result, count] = await this.articleRepo.findAndCount({
            select: ['id', 'title', 'date'],
            relations: ['tags'],
            skip,
            take: queryObj.pageSize
        });
        return { status: response_1.SuccessStatus, data: { result, total: count }, message: '' };
    }
    async fetchArticleWithTag(skip, pagesize, tag) {
        const [result, count] = await this.articleRepo.createQueryBuilder('article')
            .leftJoin('article.tags', 'tag')
            .select(['article.id', 'article.title', 'article.date', 'tag.id', 'tag.name'])
            .where('tag.id = :tagId', { tagId: tag })
            .skip(skip)
            .take(pagesize)
            .getManyAndCount();
        return { status: response_1.SuccessStatus, data: { result, total: count }, message: '' };
    }
    async fetchArticleDetail(articleId) {
        const option = {
            where: { id: articleId },
            relations: ['tags']
        };
        const result = await this.articleRepo.findOne(option);
        return { status: response_1.SuccessStatus, data: result, message: '' };
    }
};
ArticleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(article_entity_1.Article)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map