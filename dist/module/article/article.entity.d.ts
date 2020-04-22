import { Tag } from '../tag/tag.entity';
export declare class Article {
    id: number;
    title: string;
    content: string;
    date: string;
    tags: Tag[];
}
