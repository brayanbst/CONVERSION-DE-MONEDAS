import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajeService } from './message.service';
import { MensajeController } from './message.controller';
import { Mensaje } from './message.entity.ts/message.entity';
import { Campania } from './../company/company.entity.ts/company.entity';
import { Cliente } from './../clients/client.entity/client.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Mensaje, Campania, Cliente])],
    controllers: [MensajeController],
    providers: [MensajeService],
    exports: [MensajeService],
})
export class MensajeModule {}
