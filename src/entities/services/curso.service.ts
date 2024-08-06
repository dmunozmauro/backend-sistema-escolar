import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Curso } from '../entities';

@Injectable()
export class CursoService {

    constructor(
        @InjectRepository(Curso)
        private readonly cursoRepository: Repository<Curso>
    ) { }

    async findAllCurso() {
        const data = await this.cursoRepository.find();
        return data;
    }

}
