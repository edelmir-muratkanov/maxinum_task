import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseConfigFactory } from './config/database.config'
import { TransactionsModule } from './transactions/transactions.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: DatabaseConfigFactory,
    }),
    TransactionsModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
