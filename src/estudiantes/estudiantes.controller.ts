import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Controller('estudiantes')
export class EstudiantesController {

  constructor(private readonly estudianteService: EstudiantesService) { }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.estudianteService.findAll(paginationDto);
  }

  @Get('find')
  async findOne(
    @Query('run') run?: string,
    @Query('nombre') nombre?: string
  ) {
    return this.estudianteService.findOne({ run, nombre });
  }

  /* @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createEstudianteDto: CreateEstudianteDto) {
    try {

      console.log('createEstudianteDtocreateEstudianteDtocreateEstudianteDto', createEstudianteDto);

      const estudiante = await this.estudianteService.create(createEstudianteDto);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Estudiante creado exitosamente',
        data: estudiante,
      };
      
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else if (error instanceof ForbiddenException) {
        throw new ForbiddenException(error.message);
      }
      throw error;
    }
  } */

  @Post()
  create(@Body() createEstudianteDto: any) {
    console.log('llegamos al post', createEstudianteDto);
    return { message: 'Estudiante creado exitosamente' };
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateEstudianteDto: UpdateEstudianteDto) {
    try {
      return this.estudianteService.update(id, updateEstudianteDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      }
      throw error;
    }
  }

}
