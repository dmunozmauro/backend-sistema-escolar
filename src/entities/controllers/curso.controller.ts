import { Controller, Get } from '@nestjs/common';
import { CursoService } from '../services';

@Controller('curso')
export class CursoController {

    constructor(private readonly cursoService: CursoService) { }

    @Get()
    findAllCurso() {
        return this.cursoService.findAllCurso();
    }

}
