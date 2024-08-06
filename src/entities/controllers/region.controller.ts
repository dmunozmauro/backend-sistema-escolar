import { Controller, Get } from '@nestjs/common';
import { RegionService } from '../services';

@Controller('region')
export class RegionController {

    constructor(private readonly regionService: RegionService) { }

    @Get()
    findAllRegion() {
        return this.regionService.findAllRegion();
    }
}
