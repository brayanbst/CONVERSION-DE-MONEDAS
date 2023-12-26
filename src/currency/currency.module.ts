import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyExchangeController } from './currency-exchange.controller';
import { CurrencyExchangeService } from './currency-exchange.service';
import { CurrencyExchange } from './../currency_exchange/currency-exchange.entity/currency-exchange.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CurrencyExchange])],
    controllers: [CurrencyExchangeController],
    providers: [CurrencyExchangeService],
})
export class CurrencyModule {}
