import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Sexo } from '../entities';

@Injectable()
export class SexoService {

    constructor(
        @InjectRepository(Sexo)
        private readonly sexoRepository: Repository<Sexo>,
    ) { }

    async findAllSexo() {
        const data = await this.sexoRepository.find();
        return data;
    }
}
