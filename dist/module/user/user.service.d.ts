import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';
import { UserPartial, UserWithNP } from './user.interface';
export declare class UserService {
    private readonly userRepo;
    private readonly jwtService;
    constructor(userRepo: Repository<User>, jwtService: JwtService);
    findOneUserService(options: UserPartial): Promise<User>;
    userLoginService(user: UserWithNP): Promise<{
        status: number;
        message: string;
        data: string;
    }>;
}
