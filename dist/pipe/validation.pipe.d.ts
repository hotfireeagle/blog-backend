import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class ValidationPipe implements PipeTransform<any> {
    private pass;
    private errorStringify;
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
