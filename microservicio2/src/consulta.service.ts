import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consulta } from './entities/consulta.entity';
import { Tratamiento } from './entities/tratamiento.entity';
import { CreateConsultaDto } from './dto/create-consulta.dto';

@Injectable()
export class ConsultaService {
  constructor(
    @InjectRepository(Consulta)
    private consultaRepo: Repository<Consulta>,
    @InjectRepository(Tratamiento)
    private tratamientoRepo: Repository<Tratamiento>,
  ) {}

  async findAll() {
    return this.consultaRepo.find({ relations: ['tratamientos'] });
  }

  async findOne(id: number) {
    return this.consultaRepo.findOne({ where: { id }, relations: ['tratamientos'] });
  }

  async create(dto: CreateConsultaDto) {
    const tratamientos = await this.tratamientoRepo.findByIds(dto.tratamientoIds);
    const consulta = this.consultaRepo.create({
      fecha: dto.fecha,
      motivo: dto.motivo,
      tratamientos,
    });
    return this.consultaRepo.save(consulta);
  }

  async update(id: number, dto: CreateConsultaDto) {
    const consulta = await this.consultaRepo.findOneBy({ id });
    if (!consulta) return null;
    consulta.fecha = dto.fecha;
    consulta.motivo = dto.motivo;
    consulta.tratamientos = await this.tratamientoRepo.findByIds(dto.tratamientoIds);
    return this.consultaRepo.save(consulta);
  }

  async remove(id: number) {
    await this.consultaRepo.delete(id);
    return { deleted: true };
  }
}