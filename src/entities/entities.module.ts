import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ciudad, Comuna, Curso, Nacionalidad, Region, Sexo, ViveCon } from './entities'
import { CiudadController, ComunaController, CursoController, NacionalidadController, RegionController, SexoController, ViveConController } from './controllers';

import { CiudadService, ComunaService, CursoService, NacionalidadService, RegionService, SexoService, ViveConService } from './services';

@Module({
  providers:
    [CiudadService,
      ComunaService,
      CursoService,
      NacionalidadService,
      RegionService,
      SexoService,
      ViveConService],
  controllers:
    [CiudadController,
      ComunaController,
      CursoController,
      NacionalidadController,
      RegionController,
      SexoController,
      ViveConController],
  imports:
    [TypeOrmModule.forFeature([Ciudad,
      Comuna,
      Curso,
      Nacionalidad,
      Region,
      Sexo,
      ViveCon])],
  exports:
    [CiudadService,
      ComunaService,
      CursoService,
      NacionalidadService,
      RegionService,
      SexoService,
      ViveConService,
      TypeOrmModule]
})
export class EntitiesModule { }
