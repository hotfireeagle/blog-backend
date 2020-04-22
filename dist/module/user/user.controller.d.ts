import { UserService } from './user.service';
import { UserLoginDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    login(userLoginDto: UserLoginDto): Promise<{
        status: number;
        message: string;
        data: string;
    }>;
}
