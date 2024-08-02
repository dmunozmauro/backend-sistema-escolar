import { ApiProperty } from "@nestjs/swagger";
import { Ciudad, Comuna, Curso, Nacionalidad, Region, Sexo, ViveCon } from "src/entities/entities";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'tal_estudiante' })
export class Estudiante {


    @ApiProperty({
        example: '1',
        description: 'ID Estudiante',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: '11111111-1',
        description: 'RUN',
        uniqueItems: true
    })
    @Column({ type: 'varchar', length: 20, unique: true })
    run: string;

    @Column({ type: 'varchar', length: 255 })
    nombres: string;

    @Column({ type: 'varchar', length: 255 })
    apellido_paterno: string;

    @Column({ type: 'varchar', length: 255 })
    apellido_materno: string;

    @Column({ type: 'numeric' })
    edad: number;

    @ManyToOne(() => Sexo, sexo => sexo.id, { nullable: false })
    @JoinColumn({ name: 'id_sexo' })
    id_sexo: Sexo;

    @ManyToOne(() => Nacionalidad, nacionalidad => nacionalidad.id, { nullable: false })
    @JoinColumn({ name: 'id_nacionalidad' })
    id_nacionalidad: Nacionalidad;

    @Column({ type: 'timestamp' })
    fecha_nacimiento: Date;

    @Column({ type: 'varchar', length: 255, nullable: true })
    ci_pas_dni: string;

    @ManyToOne(() => Curso, curso => curso.id, { nullable: false })
    @JoinColumn({ name: 'id_curso' })
    id_curso: Curso;

    @Column({ type: 'varchar', length: 255 })
    domicilio: string;

    @ManyToOne(() => Comuna, comuna => comuna.id, { nullable: false })
    @JoinColumn({ name: 'id_comuna' })
    id_comuna: Comuna;

    @ManyToOne(() => Ciudad, ciudad => ciudad.id, { nullable: false })
    @JoinColumn({ name: 'id_ciudad' })
    id_ciudad: Ciudad;

    @ManyToOne(() => Region, region => region.id, { nullable: false })
    @JoinColumn({ name: 'id_region' })
    id_region: Region;

    @ManyToOne(() => ViveCon, viveCon => viveCon.id, { nullable: false })
    @JoinColumn({ name: 'id_vive_con' })
    id_vive_con: ViveCon;

    @Column({ type: 'varchar', length: 255, nullable: true })
    vive_con_especificar: string;

    @Column({ type: 'numeric', nullable: true })
    numero_hermanos: number;

    @Column({ type: 'numeric', nullable: true })
    lugar_entre_hermanos: number;

    @Column({ type: 'bool', default: false })
    repitencia: boolean;
    
    @Column({ type: 'varchar', length: 255, nullable: true })
    curso_repitencia: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    colegio_procedencia: string;

    @Column({ type: 'bool', default: false })
    pertenece_etnia: boolean;

    @Column({ type: 'varchar', length: 255, nullable: true })
    detalle_etnia: string;

    @Column({ type: 'bool', default: false })
    embarazada: boolean;

    @Column({ type: 'bool', default: false })
    programa_pie: boolean;
}