import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TratamientoService } from './tratamiento.service';
import { CreateTratamientoDto } from './dto/create-tratamiento.dto';

@Controller('tratamientos')
export class TratamientoController {
  constructor(private readonly tratamientoService: TratamientoService) {}

  @Get()
  findAll() {
    return this.tratamientoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tratamientoService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateTratamientoDto) {
    return this.tratamientoService.create(dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tratamientoService.remove(+id);
  }
}
