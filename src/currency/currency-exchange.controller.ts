import { Body, Controller, Post } from '@nestjs/common';
import { CurrencyExchangeService } from './currency-exchange.service';
import { UpdateExchangeRateDto } from './dto/update-exchange-rate.dto';

@Controller('currency')
export class CurrencyExchangeController {
    constructor(private readonly currencyExchangeService: CurrencyExchangeService) {}

    @Post('/update-rate')
    async updateExchangeRate(@Body() updateExchangeRateDto: UpdateExchangeRateDto) {
        return this.currencyExchangeService.updateExchangeRate(updateExchangeRateDto);
    }
}
