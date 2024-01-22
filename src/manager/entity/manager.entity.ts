import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Managers')
export class Manager {
    @PrimaryGeneratedColumn()
    ManagerId: number;

    @Column()
    FullName: string;

    @Column()
    Dni: string;

    @Column({ nullable: true })
    Email: string;

    @Column({ nullable: true })
    Phone: string;

    @Column({ type: 'date', nullable: true })
    StartDate: Date;

    @Column({ type: 'date', nullable: true })
    EndDate: Date;

    @Column()
    Complex: string;

    @Column()
    RoleId: string;

    @Column()
    State: string;

    @Column({ type: 'text', nullable: true })
    AdditionalNotes: string;

    @Column({ default: true })
    IsActive: boolean;

    @Column({ type: 'varbinary', nullable: true })
    DigitalSignature: Buffer;

    @Column({ type: 'datetime' })
    CreationDate: Date;

    @Column({ type: 'datetime', nullable: true })
    UpdatedUser: string;

    @Column({ type: 'datetime', nullable: true })
    UpdatedDate: Date;
}
