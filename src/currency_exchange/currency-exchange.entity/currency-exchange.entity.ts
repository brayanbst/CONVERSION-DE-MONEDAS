import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('currency_exchange')
export class CurrencyExchange {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 3 })
    sourceCurrency: string;

    @Column({ length: 3 })
    targetCurrency: string;

    @Column({ length: 250 })
    conversionType: string;

    @Column('decimal', { precision: 10, scale: 6 })
    exchangeRate: number;
}
