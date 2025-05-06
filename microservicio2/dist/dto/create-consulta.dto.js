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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConsultaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateConsultaDto {
}
exports.CreateConsultaDto = CreateConsultaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-05-04T12:00:00.000Z', description: 'Fecha de la consulta' }),
    __metadata("design:type", Date)
], CreateConsultaDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Chequeo general', description: 'Motivo de la consulta' }),
    __metadata("design:type", String)
], CreateConsultaDto.prototype, "motivo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [1, 2], description: 'IDs de tratamientos relacionados' }),
    __metadata("design:type", Array)
], CreateConsultaDto.prototype, "tratamientoIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID de la mascota asociada' }),
    __metadata("design:type", Number)
], CreateConsultaDto.prototype, "mascotaId", void 0);
