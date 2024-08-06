import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Nacionalidad } from '../entities';

@Injectable()
export class NacionalidadService {

    constructor(
        @InjectRepository(Nacionalidad)
        private readonly nacionalidadRepository: Repository<Nacionalidad>,
    ) { }

    async findAllNacionalidad() {
        const data = await this.nacionalidadRepository.find();
        return data;
    }
}
