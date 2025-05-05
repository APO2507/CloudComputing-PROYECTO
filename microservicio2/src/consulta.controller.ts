import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { CreateConsultaDto } from './dto/create-consulta.dto';

@Controller('consultas')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Get()
  findAll() {
    return this.consultaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultaService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateConsultaDto) {
    return this.consultaService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateConsultaDto) {
    return this.consultaService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultaService.remove(+id);
  }
}