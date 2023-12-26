import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CurrencyExchange } from './../currency_exchange/currency-exchange.entity/currency-exchange.entity';
import { UpdateExchangeRateDto } from './dto/update-exchange-rate.dto';

@Injectable()
export class CurrencyExchangeService {
    constructor(
        @InjectRepository(CurrencyExchange)
        private readonly currencyExchangeRepository: Repository<CurrencyExchange>,
    ) {}

    async updateExchangeRate(dto: UpdateExchangeRateDto): Promise<CurrencyExchange> {
        console.log('Actualizando tipo de cambio:', dto);
    
        const { sourceCurrency, targetCurrency, exchangeRate } = dto;
        let record = await this.currencyExchangeRepository.findOne({
            where: { sourceCurrency, targetCurrency },
        });
    
        console.log('Registro encontrado:', record);
    
        if (!record) {
            throw new Error('Tipo de cambio no encontrado');
        }
    
        record.exchangeRate = exchangeRate;
        const updatedRecord = await this.currencyExchangeRepository.save(record);
        console.log('Registro actualizado:', updatedRecord);
    
        return updatedRecord;
    }
    
}
