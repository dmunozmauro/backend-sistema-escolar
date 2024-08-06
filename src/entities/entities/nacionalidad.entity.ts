import { ApiProperty } from "@nestjs/swagger";
import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cal_nacionalidad' })
export class Nacionalidad {

    @ApiProperty({
        example: '1',
        description: 'ID Nacionalidad',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: 'chilena',
        description: 'descripcion nacionalidad'
    })
    @Column({ type: 'varchar', length: 100 })
    descripcion: string;

    @OneToMany(() => Estudiante, estudiante => estudiante.id_nacionalidad)
    estudiantes: Estudiante[];

}
