import { Controller, Get, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ManagersService } from './manager.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { Manager } from './entity/manager.entity';

@Controller('managers')
export class ManagersController {
    constructor(private readonly managersService: ManagersService) {}

    @Get()
    async getAllManagers(): Promise<Manager[]> {
        return this.managersService.findAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createManager(@Body() createManagerDto: CreateManagerDto): Promise<Manager> {
        return this.managersService.create(createManagerDto);
    }
}
