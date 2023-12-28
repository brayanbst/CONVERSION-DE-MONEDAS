import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Mensaje } from './../../message/message.entity.ts/message.entity';
import { Cliente } from './../../clients/client.entity/client.entity';

@Entity('campania')
export class Campania {
    @PrimaryGeneratedColumn()
    idCampania: number;

    @ManyToOne(() => Cliente)
    @JoinColumn({ name: 'idCliente' })
    cliente: Cliente;

    @Column({ length: 200 })
    nombre: string;

    @Column()
    fechaHoraProgramacion: Date;

    @Column()
    estado: number;

    @OneToMany(() => Mensaje, mensaje => mensaje.campania)
    mensajes: Mensaje[];
}
