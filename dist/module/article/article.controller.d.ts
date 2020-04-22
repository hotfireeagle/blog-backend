import { ArticleService } from './article.service';
import { CreateArticleDto } from './article.dto';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    create(articleObj: CreateArticleDto): Promise<{
        status: number;
        data: import("./article.interface").ArticleInstance & import("./article.entity").Article;
        message: string;
    }>;
    query(queryObj: any): Promise<{
        status: number;
        data: {
            result: import("./article.entity").Article[];
            total: number;
        };
        message: string;
    }>;
    getDetail(id: any): Promise<{
        status: number;
        data: import("./article.entity").Article;
        message: string;
    }>;
}
