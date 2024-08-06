import { Controller, Get } from '@nestjs/common';
import { SexoService } from '../services';

@Controller('sexo')
export class SexoController {

    constructor(private readonly sexoService: SexoService) { }

    @Get()
    findAllSexo() {
        return this.sexoService.findAllSexo();
    }
}
