import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tratamiento {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  descripcion!: string;
}