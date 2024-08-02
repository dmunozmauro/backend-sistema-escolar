import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from "class-validator";

export class CreateEstudianteDto {

    @ApiProperty({ nullable: false })
    @IsString()
    @MaxLength(20)
    run: string;

    @ApiProperty({ nullable: false })
    @IsString()
    @MaxLength(255)
    nombres: string;

    @ApiProperty({ nullable: false })
    @IsString()
    @MaxLength(255)
    apellido_paterno: string;

    @ApiProperty({ nullable: false })
    @IsString()
    @MaxLength(255)
    apellido_materno: string;

    @ApiProperty({ nullable: false })
    @IsNumber()
    @IsPositive()
    edad: number;

    @ApiProperty({ nullable: false })
    @IsNumber()
    id_sexo: number;

    @ApiProperty({ nullable: false })
    @IsNumber()
    id_nacionalidad: number;

    @ApiProperty({ nullable: false })
    @IsDate()
    @Type(() => Date)
    fecha_nacimiento: Date;

    @ApiProperty()
    @IsString()
    @IsOptional()
    ci_pas_dni?: string;

    @ApiProperty({ nullable: false })
    @IsNumber()
    id_curso: number;

    @ApiProperty({ nullable: false })
    @IsString()
    @MaxLength(255)
    domicilio: string;

    @ApiProperty({ nullable: false })
    @IsNumber()
    id_comuna: number;

    @ApiProperty({ nullable: false })
    @IsNumber()
    id_ciudad: number;

    @ApiProperty({ nullable: false })
    @IsNumber()
    id_region: number;

    @ApiProperty({ nullable: false })
    @IsNumber()
    id_vive_con: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    vive_con_especificar?: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    numero_hermanos?: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    lugar_entre_hermanos?: number;

    @ApiProperty()
    @IsBoolean()
    repitencia: boolean;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    curso_repitencia?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    colegio_procedencia?: string;

    @ApiProperty()
    @IsBoolean()
    pertenece_etnia: boolean;

    @ApiProperty()
    @IsString()
    @IsOptional()
    detalle_etnia?: string;

    @ApiProperty()
    @IsBoolean()
    embarazada: boolean;

    @ApiProperty()
    @IsBoolean()
    programa_pie: boolean;
}
