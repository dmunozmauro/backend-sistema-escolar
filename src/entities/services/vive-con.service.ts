import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ViveCon } from '../entities';

@Injectable()
export class ViveConService {

    constructor(
        @InjectRepository(ViveCon)
        private readonly viveConRepository: Repository<ViveCon>
    ) { }

    async findAllViveCon() {
        const data = await this.viveConRepository.find();
        return data;
    }
}
