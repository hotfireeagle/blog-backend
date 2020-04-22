import { Repository } from 'typeorm';
import { Article } from './article.entity';
import { ICreateArticle, ArticleInstance, IQuery } from './article.interface';
export declare class ArticleService {
    private readonly articleRepo;
    constructor(articleRepo: Repository<Article>);
    newArticleService(articleObj: ICreateArticle): Promise<{
        status: number;
        data: ArticleInstance & Article;
        message: string;
    }>;
    fetchArticleService(queryObj: IQuery): Promise<{
        status: number;
        data: {
            result: Article[];
            total: number;
        };
        message: string;
    }>;
    private fetchArticleWithTag;
    fetchArticleDetail(articleId: number): Promise<{
        status: number;
        data: Article;
        message: string;
    }>;
}
