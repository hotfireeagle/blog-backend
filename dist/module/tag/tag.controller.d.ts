import { TagService } from './tag.service';
import { CreateTagDto } from './tag.dto';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    create(tagObj: CreateTagDto): Promise<{
        status: number;
        message: string;
        data: Pick<import("./tag.interface").ITag, "name"> & import("./tag.entity").Tag;
    }>;
    getAll(): Promise<{
        status: number;
        message: string;
        data: import("./tag.entity").Tag[];
    }>;
    deleteTag(tagId: string): Promise<{
        status: number;
        message: string;
    }>;
}
