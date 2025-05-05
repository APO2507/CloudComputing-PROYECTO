import { ApiProperty } from '@nestjs/swagger';

export class CreateConsultaDto {
  @ApiProperty({ example: '2025-05-04T12:00:00.000Z', description: 'Fecha de la consulta' })
  fecha!: Date;

  @ApiProperty({ example: 'Chequeo general', description: 'Motivo de la consulta' })
  motivo!: string;

  @ApiProperty({ example: [1, 2], description: 'IDs de tratamientos relacionados' })
  tratamientoIds!: number[];
}
