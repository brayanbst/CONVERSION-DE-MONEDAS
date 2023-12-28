import { Controller, Get, Query, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './../auth/jwt.auth.guard';
import { MensajeService } from './message.service';
import { FilterMessagesDto } from './dto/filter-messages.dto';

@Controller('mensajes')
export class MensajeController {
    constructor(private readonly mensajeService: MensajeService) {}

    //@UseGuards(JwtAuthGuard)
    @Get('/filter')
    @HttpCode(HttpStatus.OK)
    async filterMessages(@Query() filterMessagesDto: FilterMessagesDto) {
        return this.mensajeService.filterMessages(filterMessagesDto);
    }
}
