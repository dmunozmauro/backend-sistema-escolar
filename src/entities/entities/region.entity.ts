import { ApiProperty } from "@nestjs/swagger";
import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cal_region' })
export class Region {

    @ApiProperty({
        example: '1',
        description: 'ID Region',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: 'metropolitana',
        description: 'descripcion region',
        uniqueItems: true
    })
    @Column({ type: 'varchar', length: 100, unique: true })
    descripcion: string;

    @OneToMany(() => Estudiante, estudiante => estudiante.id_region)
    estudiantes: Estudiante[];

}
