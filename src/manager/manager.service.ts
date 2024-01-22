import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Manager } from './entity/manager.entity';
import { CreateManagerDto } from './dto/create-manager.dto';

@Injectable()
export class ManagersService {
    constructor(
        @InjectRepository(Manager)
        private readonly managersRepository: Repository<Manager>,
    ) {}

    async findAll(): Promise<Manager[]> {
        return this.managersRepository.find();
    }

    async create(createManagerDto: CreateManagerDto): Promise<Manager> {
        const manager = this.managersRepository.create(createManagerDto);
        return this.managersRepository.save(manager);
    }
}
