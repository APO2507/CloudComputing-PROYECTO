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
exports.TratamientoController = void 0;
const common_1 = require("@nestjs/common");
const tratamiento_service_1 = require("./tratamiento.service");
const create_tratamiento_dto_1 = require("./dto/create-tratamiento.dto");
let TratamientoController = class TratamientoController {
    constructor(tratamientoService) {
        this.tratamientoService = tratamientoService;
    }
    findAll() {
        return this.tratamientoService.findAll();
    }
    findOne(id) {
        return this.tratamientoService.findOne(+id);
    }
    create(dto) {
        return this.tratamientoService.create(dto);
    }
    remove(id) {
        return this.tratamientoService.remove(+id);
    }
};
exports.TratamientoController = TratamientoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TratamientoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TratamientoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tratamiento_dto_1.CreateTratamientoDto]),
    __metadata("design:returntype", void 0)
], TratamientoController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TratamientoController.prototype, "remove", null);
exports.TratamientoController = TratamientoController = __decorate([
    (0, common_1.Controller)('tratamientos'),
    __metadata("design:paramtypes", [tratamiento_service_1.TratamientoService])
], TratamientoController);
