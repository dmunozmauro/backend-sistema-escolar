import { ApiProperty } from "@nestjs/swagger";
import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cal_sexo' })
export class Sexo {

    @ApiProperty({
        example: '1',
        description: 'ID Sexo',
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: 'hombre',
        description: 'descripcion sexo',
    })
    @Column({ type: 'varchar', length: 100, unique: true })
    descripcion: string;

    @OneToMany(() => Estudiante, estudiante => estudiante.id_sexo)
    estudiantes: Estudiante[];
}
