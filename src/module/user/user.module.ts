import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'
import { JWT_SECRET } from '../../constant/system'
import { JwtStrategy } from './auth.strategy'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { User } from './user.entity'
import { TOKEN_LIFE } from '../../constant/system'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ secret: JWT_SECRET, signOptions: { expiresIn: TOKEN_LIFE } })
  ],
  providers: [UserService, JwtStrategy],
  controllers: [UserController],
})
export class UserModule {}
