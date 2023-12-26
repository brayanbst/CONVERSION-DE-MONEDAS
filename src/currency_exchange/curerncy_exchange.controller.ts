import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../auth/jwt.auth.guard';
import { CurrencyExchangeService } from './currency-exchange.service';
import { ConvertCurrencyDto } from './../currency_exchange/dto/create-currency-exchange.dto';

@Controller('currency-exchange')
export class CurrencyExchangeController {
    constructor(private readonly currencyExchangeService: CurrencyExchangeService) {}

    @UseGuards(JwtAuthGuard)
    @Post('/convert')
    @HttpCode(HttpStatus.OK)
    async convertCurrency(@Body() convertCurrencyDto: ConvertCurrencyDto) {
        return this.currencyExchangeService.convertCurrency(convertCurrencyDto);
    }
}
