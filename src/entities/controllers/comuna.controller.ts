import { Controller, Get } from '@nestjs/common';
import { ComunaService } from '../services';

@Controller('comuna')
export class ComunaController {

    constructor(private readonly comunaService: ComunaService) { }

    @Get()
    findAllComuna() {
        return this.comunaService.findAllComuna();
    }

}
