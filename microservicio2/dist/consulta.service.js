"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const consulta_entity_1 = require("./entities/consulta.entity");
const tratamiento_entity_1 = require("./entities/tratamiento.entity");
let ConsultaService = class ConsultaService {
    constructor(consultaRepo, tratamientoRepo) {
        this.consultaRepo = consultaRepo;
        this.tratamientoRepo = tratamientoRepo;
    }
    async findAll() {
        return this.consultaRepo.find({ relations: ['tratamientos'] });
    }
    async findOne(id) {
        return this.consultaRepo.findOne({ where: { id }, relations: ['tratamientos'] });
    }
    async create(dto) {
        const tratamientos = await this.tratamientoRepo.findByIds(dto.tratamientoIds);
        const consulta = this.consultaRepo.create({
            fecha: dto.fecha,
            motivo: dto.motivo,
            mascotaId: dto.mascotaId,
            tratamientos,
        });
        return this.consultaRepo.save(consulta);
    }
    async update(id, dto) {
        const consulta = await this.consultaRepo.findOneBy({ id });
        if (!consulta)
            return null;
        consulta.fecha = dto.fecha;
        consulta.motivo = dto.motivo;
        mascotaId: dto.mascotaId,
            consulta.tratamientos = await this.tratamientoRepo.findByIds(dto.tratamientoIds);
        return this.consultaRepo.save(consulta);
    }
    async remove(id) {
        await this.consultaRepo.delete(id);
        return { deleted: true };
    }
};
exports.ConsultaService = ConsultaService;
exports.ConsultaService = ConsultaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(consulta_entity_1.Consulta)),
    __param(1, (0, typeorm_1.InjectRepository)(tratamiento_entity_1.Tratamiento)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ConsultaService);
