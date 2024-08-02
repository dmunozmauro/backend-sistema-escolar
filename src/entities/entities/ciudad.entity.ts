import { ApiProperty } from "@nestjs/swagger";
import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'cal_ciudad' })
export class Ciudad {

    @ApiProperty({
        example: '1',
        description: 'ID ciudad',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: 'santiago',
        description: 'descripcion ciudad',
        uniqueItems: true
    })
    @Column({ type: 'varchar', length: 100, unique: true })
    descripcion: string;

    @OneToMany(() => Estudiante, estudiante => estudiante.id_ciudad)
    estudiantes: Estudiante[];
}
