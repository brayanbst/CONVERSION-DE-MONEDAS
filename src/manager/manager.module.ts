import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagersService } from './manager.service';
import { ManagersController } from './manager.controller';
import { Manager } from './entity/manager.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Manager])],
    controllers: [ManagersController],
    providers: [ManagersService],
})
export class ManagersModule {}
