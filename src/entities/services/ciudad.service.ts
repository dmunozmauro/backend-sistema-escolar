import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Ciudad } from '../entities';

@Injectable()
export class CiudadService {

    constructor(
        @InjectRepository(Ciudad)
        private readonly ciudadRepository: Repository<Ciudad>,
    ) { }

    async findAllCiudad() {
        const data = await this.ciudadRepository.find();
        return data;
    }

}
