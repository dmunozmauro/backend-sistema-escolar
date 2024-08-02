import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateEstudianteDto } from './create-estudiante.dto';

export class UpdateEstudianteDto extends PartialType(
    OmitType(CreateEstudianteDto, ['run'] as const)
) { }
