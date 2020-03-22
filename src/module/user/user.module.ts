import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'
import { JWT_SECRET } from '../../constant/system'
import { JwtStrategy } from './auth.strategy'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { User } from './user.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ secret: JWT_SECRET, signOptions: { expiresIn: '30S' } })
  ],
  providers: [UserService, JwtStrategy],
  controllers: [UserController],
})
export class UserModule {}
