import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Mensaje } from './../../message/message.entity.ts/message.entity';

@Entity('cliente')
export class Cliente {
    @PrimaryGeneratedColumn()
    idCliente: number;

    @Column({ length: 100 })
    nombre: string;

    @Column()
    estado: number;

    @OneToMany(() => Mensaje, mensaje => mensaje.cliente)
    mensajes: Mensaje[];
}
