import { Injectable, NotFoundException } from '@nestjs/common';
import { ConvertCurrencyDto } from './dto/convert-currency.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CurrencyExchange } from './currency-exchange.entity/currency-exchange.entity'

@Injectable()
export class CurrencyExchangeService {
    constructor(
        @InjectRepository(CurrencyExchange)
        private readonly currencyExchangeRepository: Repository<CurrencyExchange>,
    ) {}

    async convertCurrency(convertCurrencyDto: ConvertCurrencyDto): Promise<any> {
        const { amount, sourceCurrency, targetCurrency } = convertCurrencyDto;
    
        const exchangeRateRecord = await this.currencyExchangeRepository.findOne({
            where: {
                sourceCurrency: sourceCurrency,
                targetCurrency: targetCurrency,
            },
        });
    
        if (!exchangeRateRecord) {
            throw new NotFoundException(`Tipo de cambio no encontrado para ${sourceCurrency} a ${targetCurrency}`);
        }
    
        let convertedAmount;
        if (exchangeRateRecord.conversionType === 'MULTIPLY') {
            convertedAmount = amount * exchangeRateRecord.exchangeRate;
        } else {
            convertedAmount = amount / exchangeRateRecord.exchangeRate;
        }
    
        return {
            originalAmount: amount,
            convertedAmount: convertedAmount,
            sourceCurrency: sourceCurrency,
            targetCurrency: targetCurrency,
            exchangeRate: exchangeRateRecord.exchangeRate,
        };
    }
    
}