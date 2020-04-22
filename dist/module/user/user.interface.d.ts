export interface User {
    id: number;
    name: string;
    password: string;
}
export declare type UserPartial = Partial<User>;
export declare type UserWithNP = Omit<User, 'id'>;
