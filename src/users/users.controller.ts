import { 
    Controller, 
    Post, 
    Get, 
    Patch, 
    Delete, 
    Body, 
    Param, 
    HttpCode, 
    HttpStatus,
    UseGuards
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from './../auth/jwt.auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<User> {
        return this.usersService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateUserDto: any): Promise<User> {
        return this.usersService.update(id, updateUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number): Promise<void> {
        return this.usersService.remove(id);
    }
}