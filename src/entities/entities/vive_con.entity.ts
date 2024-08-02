import { ApiProperty } from "@nestjs/swagger";
import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cal_vive_con' })
export class ViveCon {

    @ApiProperty({
        example: '1',
        description: 'ID ViveCon',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: 'Padres',
        description: 'descripcion vive con',
        uniqueItems: true
    })
    @Column({ type: 'varchar', length: 100, unique: true })
    descripcion: string;

    @OneToMany(() => Estudiante, estudiante => estudiante.id_vive_con)
    estudiantes: Estudiante[];

}
