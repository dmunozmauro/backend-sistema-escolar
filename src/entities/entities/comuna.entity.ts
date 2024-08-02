import { ApiProperty } from "@nestjs/swagger";
import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cal_comuna' })
export class Comuna {

    @ApiProperty({
        example: '1',
        description: 'ID comuna',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: 'santiago',
        description: 'descripcion comuna',
        uniqueItems: true
    })
    @Column({ type: 'varchar', length: 100, unique: true })
    descripcion: string;

    @OneToMany(() => Estudiante, estudiante => estudiante.id_comuna)
    estudiantes: Estudiante[];
}
