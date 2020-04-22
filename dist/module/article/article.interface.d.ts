export interface ICreateArticle {
    title: string;
    content: string;
    tags: Array<number>;
}
interface TagId {
    id: number;
}
export interface ArticleInstance {
    title: string;
    content: string;
    tags: Array<TagId>;
    date: string;
}
export interface IQuery {
    page?: number;
    pageSize?: number;
    tagId?: number;
}
export {};
