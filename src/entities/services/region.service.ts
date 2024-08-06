import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Region } from '../entities';

@Injectable()
export class RegionService {

    constructor(
        @InjectRepository(Region)
        private readonly regionRepository: Repository<Region>,
    ) { }

    async findAllRegion() {
        const data = await this.regionRepository.find();
        return data;
    }
}
