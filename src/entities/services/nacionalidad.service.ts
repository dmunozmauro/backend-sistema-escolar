import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Nacionalidad } from '../entities';
import { CreateNacionalidadDto } from '../dto/create-nacionalidad.dto';

@Injectable()
export class NacionalidadService {

    constructor(
        @InjectRepository(Nacionalidad)
        private readonly nacionalidadRepository: Repository<Nacionalidad>,
    ) { }

    async findAll() {
        const data = await this.nacionalidadRepository.find();
        return data;
    }

    async create(createNacionalidad: CreateNacionalidadDto) {
        return this.nacionalidadRepository.save(createNacionalidad);
    }

    async update(id: number, createNacionalidad: CreateNacionalidadDto) {
        const nacionalidad = await this.nacionalidadRepository.findOne({ where: { id } });
        if (!nacionalidad) throw new NotFoundException('Nacionalidad no encontrada');

        console.log(nacionalidad);

        Object.assign(nacionalidad, createNacionalidad);

        return this.nacionalidadRepository.save(nacionalidad);
    }

    async remove(id: number) {
        const nacionalidad = await this.nacionalidadRepository.findOne({ where: { id } });
        if (!nacionalidad) throw new NotFoundException('Nacionalidad no encontrada');

        return await this.nacionalidadRepository.remove(nacionalidad);
    }
}
