import { BadRequestException, Body, Controller, Delete, ForbiddenException, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { NacionalidadService } from '../services';
import { CreateNacionalidadDto } from '../dto/create-nacionalidad.dto';

@Controller('nacionalidad')
export class NacionalidadController {

    constructor(private readonly nacionalidadService: NacionalidadService) { }

    @Get()
    findAll() {
        return this.nacionalidadService.findAll();
    }

    @Post()
    async create(@Body() createNacionalidad: CreateNacionalidadDto) {
        try {
            const nacionalidad = await this.nacionalidadService.create(createNacionalidad);
            return {
                statusCode: HttpStatus.CREATED,
                message: 'Nacionalidad creada exitosamente',
                data: nacionalidad,
            };
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw new BadRequestException(error.message);
            } else if (error instanceof ForbiddenException) {
                throw new ForbiddenException(error.message);
            }
            throw error;
        }
    }

    @Patch(':id')
    async update(@Param('id') id: number,
        @Body() createNacionalidad: CreateNacionalidadDto) {
        try {
            const nacionalidad = await this.nacionalidadService.update(id, createNacionalidad);
            return {
                statusCode: HttpStatus.OK,
                message: 'Nacionalidad actualizada exitosamente',
                data: nacionalidad,
            };
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw new BadRequestException(error.message);
            } else if (error instanceof ForbiddenException) {
                throw new ForbiddenException(error.message);
            }
            throw error;
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        try {
            await this.nacionalidadService.remove(id);

            return {
                statusCode: HttpStatus.OK,
                message: 'Nacionalidad eliminada exitosamente'
            };
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw new BadRequestException(error.message);
            } else if (error instanceof ForbiddenException) {
                throw new ForbiddenException(error.message);
            }
            throw error;
        }
    }
}
