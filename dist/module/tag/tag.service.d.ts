import { Repository } from 'typeorm';
import { Tag } from './tag.entity';
import { ITagWN } from './tag.interface';
export declare class TagService {
    private readonly tagRepo;
    constructor(tagRepo: Repository<Tag>);
    findTagByName(name: string): Promise<Tag>;
    newTagService(tag: ITagWN): Promise<{
        status: number;
        message: string;
        data: Pick<import("./tag.interface").ITag, "name"> & Tag;
    }>;
    findAllTags(): Promise<{
        status: number;
        message: string;
        data: Tag[];
    }>;
    deleteTagService(tagId: any): Promise<{
        status: number;
        message: string;
    }>;
}
