import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tratamiento } from './entities/tratamiento.entity';
import { CreateTratamientoDto } from './dto/create-tratamiento.dto';

@Injectable()
export class TratamientoService {
  constructor(
    @InjectRepository(Tratamiento)
    private readonly tratamientoRepo: Repository<Tratamiento>,
  ) {}

  findAll() {
    return this.tratamientoRepo.find();
  }

  findOne(id: number) {
    return this.tratamientoRepo.findOneBy({ id });
  }

  create(dto: CreateTratamientoDto) {
    const tratamiento = this.tratamientoRepo.create(dto);
    return this.tratamientoRepo.save(tratamiento);
  }

  async remove(id: number) {
    await this.tratamientoRepo.delete(id);
    return { deleted: true };
  }
}
