import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consulta } from './entities/consulta.entity';
import { Tratamiento } from './entities/tratamiento.entity';
import { ConsultaService } from './consulta.service';
import { ConsultaController } from './consulta.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'admin',
      database: process.env.DB_NAME || 'consultasdb',
      entities: [Consulta, Tratamiento],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Consulta, Tratamiento]),
  ],
  controllers: [ConsultaController],
  providers: [ConsultaService],
})
export class AppModule {}