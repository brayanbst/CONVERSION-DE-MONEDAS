import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cliente } from './../../clients/client.entity/client.entity';
import { Campania } from './../../company/company.entity.ts/company.entity';

@Entity('mensaje')
export class Mensaje {
    @PrimaryGeneratedColumn()
    idMensaje: number;

    @ManyToOne(() => Campania)
    @JoinColumn({ name: 'idCampania' })
    campania: Campania;

    @ManyToOne(() => Cliente)
    @JoinColumn({ name: 'idCliente' })
    cliente: Cliente;


    @Column({ length: 30 })
    usuario: string;

    @Column()
    estadoEnvio: number;

    @Column({ type: 'datetime' })
    fechaHoraEnvio: Date;

    @Column({ length: 160 })
    mensaje: string;

    @Column()
    estado: number;
}