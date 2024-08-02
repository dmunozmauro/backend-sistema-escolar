import { Module } from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { EntitiesController } from './entities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudad, Comuna, Curso, Nacionalidad, Region, Sexo, ViveCon } from './entities'

@Module({
  providers: [EntitiesService],
  controllers: [EntitiesController],
  imports: [
    TypeOrmModule.forFeature([Ciudad, Comuna, Curso, Nacionalidad, Region, Sexo, ViveCon])
  ],
  exports: [EntitiesService, TypeOrmModule]
})
export class EntitiesModule { }
