import { Controller, Get } from '@nestjs/common';
import { NacionalidadService } from '../services';

@Controller('nacionalidad')
export class NacionalidadController {

    constructor(private readonly nacionalidadService: NacionalidadService) { }

    @Get()
    findAllNacionalidad() {
        return this.nacionalidadService.findAllNacionalidad();
    }
}
