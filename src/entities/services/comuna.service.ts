import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Comuna } from '../entities';

@Injectable()
export class ComunaService {

    constructor(
        @InjectRepository(Comuna)
        private readonly comunaRepository: Repository<Comuna>
    ) { }

    async findAllComuna() {
        const data = await this.comunaRepository.find();
        return data;
    }
}
