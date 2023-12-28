import { IsNotEmpty, IsNumber, IsOptional, IsDateString, IsBoolean } from 'class-validator';

export class FilterMessagesDto {
    @IsNumber()
    @IsNotEmpty()
    month: number;

    @IsNumber()
    @IsNotEmpty()
    year: number;

    @IsNumber()
    @IsOptional()
    idCliente?: number;

    @IsDateString()
    @IsOptional()
    someDateField?: string;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;
}
