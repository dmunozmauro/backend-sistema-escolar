import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Repository } from 'typeorm';

import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

import { Estudiante } from './entities/estudiante.entity';

import { Ciudad, Comuna, Curso, Nacionalidad, Region, Sexo, ViveCon } from 'src/entities/entities';

@Injectable()
export class EstudiantesService {

  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,

    @InjectRepository(Sexo)
    private readonly sexoRepository: Repository<Sexo>,

    @InjectRepository(Nacionalidad)
    private readonly nacionalidadRepository: Repository<Nacionalidad>,

    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,

    @InjectRepository(Comuna)
    private readonly comunaRepository: Repository<Comuna>,

    @InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<Ciudad>,

    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>,

    @InjectRepository(ViveCon)
    private readonly viveConRepository: Repository<ViveCon>,
  ) { }


  async findAll(paginationDto: PaginationDto) {

    const { limit = 10, offset = 0 } = paginationDto;

    const estudiante = await this.estudianteRepository.find({
      take: limit,
      skip: offset
    });

    return estudiante;
  }

  async findOne(params: { run?: string; nombre?: string }) {
    let estudiante: Estudiante;

    const { run } = params;

    const conditions: any = {};
    if (run) {
      conditions.run = run;
    }

    estudiante = await this.estudianteRepository.findOne({ where: conditions });

    if (!estudiante) {
      throw new NotFoundException(`El estudiante no fue encontrado`);
    }

    return estudiante;
  }

  async create(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    try {
      const sexo = await this.sexoRepository.findOne({ where: { id: createEstudianteDto.id_sexo } });
      if (!sexo) throw new BadRequestException('Sexo no encontrado');

      const nacionalidad = await this.nacionalidadRepository.findOne({ where: { id: createEstudianteDto.id_nacionalidad } });
      if (!nacionalidad) throw new BadRequestException('Nacionalidad no encontrada');

      const curso = await this.cursoRepository.findOne({ where: { id: createEstudianteDto.id_curso } });
      if (!curso) throw new BadRequestException('Curso no encontrado');

      const comuna = await this.comunaRepository.findOne({ where: { id: createEstudianteDto.id_comuna } });
      if (!comuna) throw new BadRequestException('Comuna no encontrada');

      const ciudad = await this.ciudadRepository.findOne({ where: { id: createEstudianteDto.id_ciudad } });
      if (!ciudad) throw new BadRequestException('Ciudad no encontrada');

      const region = await this.regionRepository.findOne({ where: { id: createEstudianteDto.id_region } });
      if (!region) throw new BadRequestException('Región no encontrada');

      const viveCon = await this.viveConRepository.findOne({ where: { id: createEstudianteDto.id_vive_con } });
      if (!viveCon) throw new BadRequestException('Vive con no encontrada');

      const existingEstudiante = await this.estudianteRepository.findOne({ where: { run: createEstudianteDto.run } });
      if (existingEstudiante) throw new ForbiddenException('Estudiante con RUN ya existe');

      const estudiante = new Estudiante();
      estudiante.run = createEstudianteDto.run;
      estudiante.nombres = createEstudianteDto.nombres;
      estudiante.apellido_paterno = createEstudianteDto.apellido_paterno;
      estudiante.apellido_materno = createEstudianteDto.apellido_materno;
      estudiante.edad = createEstudianteDto.edad;
      estudiante.id_sexo = sexo;
      estudiante.id_nacionalidad = nacionalidad;
      estudiante.fecha_nacimiento = createEstudianteDto.fecha_nacimiento;
      estudiante.ci_pas_dni = createEstudianteDto.ci_pas_dni;
      estudiante.id_curso = curso;
      estudiante.domicilio = createEstudianteDto.domicilio;
      estudiante.id_comuna = comuna;
      estudiante.id_ciudad = ciudad;
      estudiante.id_region = region;
      estudiante.id_vive_con = viveCon;
      estudiante.vive_con_especificar = createEstudianteDto.vive_con_especificar;
      estudiante.numero_hermanos = createEstudianteDto.numero_hermanos;
      estudiante.lugar_entre_hermanos = createEstudianteDto.lugar_entre_hermanos;
      estudiante.repitencia = createEstudianteDto.repitencia;
      estudiante.colegio_procedencia = createEstudianteDto.colegio_procedencia;
      estudiante.pertenece_etnia = createEstudianteDto.pertenece_etnia;
      estudiante.detalle_etnia = createEstudianteDto.detalle_etnia;
      estudiante.embarazada = createEstudianteDto.embarazada;
      estudiante.programa_pie = createEstudianteDto.programa_pie;

      return this.estudianteRepository.save(estudiante);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      } else if (error instanceof ForbiddenException) {
        throw new ForbiddenException(error.message);
      }
      throw error;
    }
  }

  async update(id: number, updateEstudianteDto: UpdateEstudianteDto): Promise<Estudiante> {
    const estudiante = await this.estudianteRepository.findOne({ where: { id } });
    if (!estudiante) throw new NotFoundException('Estudiante no encontrado');

    if (updateEstudianteDto.id_sexo) {
      const sexo = await this.sexoRepository.findOne({ where: { id: updateEstudianteDto.id_sexo } });
      if (!sexo) throw new BadRequestException('Sexo no encontrado');
      estudiante.id_sexo = sexo;
    }

    if (updateEstudianteDto.id_nacionalidad) {
      const nacionalidad = await this.nacionalidadRepository.findOne({ where: { id: updateEstudianteDto.id_nacionalidad } });
      if (!nacionalidad) throw new BadRequestException('Nacionalidad no encontrada');
      estudiante.id_nacionalidad = nacionalidad;
    }

    if (updateEstudianteDto.id_curso) {
      const curso = await this.cursoRepository.findOne({ where: { id: updateEstudianteDto.id_curso } });
      if (!curso) throw new BadRequestException('Curso no encontrado');
      estudiante.id_curso = curso;
    }

    if (updateEstudianteDto.id_comuna) {
      const comuna = await this.comunaRepository.findOne({ where: { id: updateEstudianteDto.id_comuna } });
      if (!comuna) throw new BadRequestException('Comuna no encontrada');
      estudiante.id_comuna = comuna;
    }

    if (updateEstudianteDto.id_ciudad) {
      const ciudad = await this.ciudadRepository.findOne({ where: { id: updateEstudianteDto.id_ciudad } });
      if (!ciudad) throw new BadRequestException('Ciudad no encontrada');
      estudiante.id_ciudad = ciudad;
    }

    if (updateEstudianteDto.id_region) {
      const region = await this.regionRepository.findOne({ where: { id: updateEstudianteDto.id_region } });
      if (!region) throw new BadRequestException('Región no encontrada');
      estudiante.id_region = region;
    }

    if (updateEstudianteDto.id_vive_con) {
      const viveCon = await this.viveConRepository.findOne({ where: { id: updateEstudianteDto.id_vive_con } });
      if (!viveCon) throw new BadRequestException('Vive con no encontrada');
      estudiante.id_vive_con = viveCon;
    }

    // Actualiza solo las propiedades presentes en el DTO
    Object.assign(estudiante, updateEstudianteDto);

    return this.estudianteRepository.save(estudiante);
  }
}
