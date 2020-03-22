import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { entities } from './app.entity'
import { UserModule } from './module/user/user.module'

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
