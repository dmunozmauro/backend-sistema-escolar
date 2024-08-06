import { Controller, Get } from '@nestjs/common';
import { CiudadService } from '../services';

@Controller('ciudad')
export class CiudadController {

    constructor(private readonly ciudadService: CiudadService) { }

    @Get()
    findAllCiudad() {
        return this.ciudadService.findAllCiudad();
    }

}
