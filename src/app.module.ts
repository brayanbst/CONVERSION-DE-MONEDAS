import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CurrencyExchangeModule } from './currency_exchange/currency-exchange.module';
import { ClientsModule } from './clients/clients.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeormService } from './config/typeorm.service';
import { CurrencyModule } from './currency/currency.module';
import { MensajeModule } from './message/message.module';
import { ManagersModule } from './manager/manager.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeormService,
    }),
    CurrencyModule,
    CurrencyExchangeModule,
    UsersModule, 
    ClientsModule, 
    AuthModule,
    MensajeModule,
    ManagersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
