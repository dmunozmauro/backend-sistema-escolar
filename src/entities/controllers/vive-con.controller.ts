import { Controller, Get } from '@nestjs/common';
import { ViveConService } from '../services';

@Controller('viveCon')
export class ViveConController {

    constructor(private readonly viveConService: ViveConService) { }

    @Get()
    findAllViveCon() {
        return this.viveConService.findAllViveCon();
    }
}
