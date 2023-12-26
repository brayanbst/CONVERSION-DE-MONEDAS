import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyExchangeService } from './currency-exchange.service';
import { CurrencyExchangeController } from './curerncy_exchange.controller';
import { CurrencyExchange } from './currency-exchange.entity/currency-exchange.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CurrencyExchange])],
    controllers: [CurrencyExchangeController],
    providers: [CurrencyExchangeService],
    exports: [CurrencyExchangeService],
})
export class CurrencyExchangeModule {}
