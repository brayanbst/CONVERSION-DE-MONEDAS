import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class ConvertCurrencyDto {
    @IsNumber()
    amount: number;

    @IsString()
    @IsNotEmpty()
    sourceCurrency: string;

    @IsString()
    @IsNotEmpty()
    targetCurrency: string;

    @IsString()
    @IsNotEmpty()
    conversionType: string;
}
