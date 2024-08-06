import { IsString, MaxLength } from "class-validator";

export class CreateNacionalidadDto {

    @IsString()
    @MaxLength(100)
    descripcion: string;
}
