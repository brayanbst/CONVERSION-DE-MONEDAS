import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual, LessThanOrEqual } from 'typeorm';
import { Mensaje } from './message.entity.ts/message.entity';
import { FilterMessagesDto } from './dto/filter-messages.dto';
import { format } from 'date-fns'
@Injectable()
export class MensajeService {
    constructor(
        @InjectRepository(Mensaje)
        private readonly mensajeRepository: Repository<Mensaje>,
    ) {}

    async filterMessages(filterMessagesDto: FilterMessagesDto): Promise<Mensaje[]> {
        const { month, year, idCliente } = filterMessagesDto;
        const query = this.mensajeRepository.createQueryBuilder('mensaje')
            .leftJoinAndSelect('mensaje.campania', 'campania');

        if (year) {
            const startDate = new Date(year, 0, 1);
            const endDate = new Date(year, 11, 31, 23, 59, 59);
            query.andWhere('mensaje.fechaHoraEnvio >= :startDate', { startDate: startDate })
            .andWhere('mensaje.fechaHoraEnvio <= :endDate', { endDate: endDate });
        }

        if (month) {
            const startDate = new Date(year || new Date().getFullYear(), month - 1, 1);
            const endDate = new Date(year || new Date().getFullYear(), month, 0);
            query.andWhere('mensaje.fechaHoraEnvio >= :startDate', { startDate: startDate.toISOString() })
                 .andWhere('mensaje.fechaHoraEnvio <= :endDate', { endDate: endDate.toISOString() });
        }

        if (idCliente !== undefined) {
            query.andWhere('campania.idCliente = :idCliente', { idCliente });
        }

        if (filterMessagesDto.isActive !== undefined) {
            query.andWhere('mensaje.estado = :estado', { estado: filterMessagesDto.isActive });
        }

        const mensajes = await query.getMany();
        return mensajes;
    }
}
