import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Tratamiento } from './tratamiento.entity';

@Entity()
export class Consulta {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fecha!: Date;

  @Column()
  motivo!: string;

  @ManyToMany(() => Tratamiento, { cascade: true })
  @JoinTable()
  tratamientos!: Tratamiento[];
}