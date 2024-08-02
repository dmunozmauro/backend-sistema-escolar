import { ApiProperty } from "@nestjs/swagger";
import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cal_curso' })
export class Curso {

    @ApiProperty({
        example: '1',
        description: 'ID Curso',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: '1 basico',
        description: 'descripcion curso',
        uniqueItems: true
    })
    @Column({ type: 'varchar', length: 100, unique: true })
    descripcion: string;

    @OneToMany(() => Estudiante, estudiante => estudiante.id_curso)
    estudiantes: Estudiante[];

}
