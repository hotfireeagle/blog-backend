import { Module } from '@nestjs/common'
import { APP_PIPE } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'
import { entities } from './app.entity'
import { ValidationPipe } from './pipe/validation.pipe'
import { UserModule } from './module/user/user.module'
import { TagModule } from './module/tag/tag.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '6666',
      database: 'blog',
      entities,
      synchronize: true,
    }),
    UserModule,
    TagModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ],
})
export class AppModule {}
