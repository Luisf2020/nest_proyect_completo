import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;  // <- Notamos el !

  @Column()
  name!: string;

  @Column('float')
  price!: number;

  @Column()
  userId!: string;
}
