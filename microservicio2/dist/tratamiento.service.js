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
exports.TratamientoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tratamiento_entity_1 = require("./entities/tratamiento.entity");
let TratamientoService = class TratamientoService {
    constructor(tratamientoRepo) {
        this.tratamientoRepo = tratamientoRepo;
    }
    findAll() {
        return this.tratamientoRepo.find();
    }
    findOne(id) {
        return this.tratamientoRepo.findOneBy({ id });
    }
    create(dto) {
        const tratamiento = this.tratamientoRepo.create(dto);
        return this.tratamientoRepo.save(tratamiento);
    }
    async remove(id) {
        await this.tratamientoRepo.delete(id);
        return { deleted: true };
    }
};
exports.TratamientoService = TratamientoService;
exports.TratamientoService = TratamientoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tratamiento_entity_1.Tratamiento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TratamientoService);
