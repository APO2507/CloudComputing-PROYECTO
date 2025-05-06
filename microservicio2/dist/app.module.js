"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const consulta_entity_1 = require("./entities/consulta.entity");
const tratamiento_entity_1 = require("./entities/tratamiento.entity");
const consulta_service_1 = require("./consulta.service");
const consulta_controller_1 = require("./consulta.controller");
const tratamiento_service_1 = require("./tratamiento.service");
const tratamiento_controller_1 = require("./tratamiento.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST || 'localhost',
                port: 3306,
                username: process.env.DB_USERNAME || 'root',
                password: process.env.DB_PASSWORD || 'admin',
                database: process.env.DB_NAME || 'consultasdb',
                entities: [consulta_entity_1.Consulta, tratamiento_entity_1.Tratamiento],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([consulta_entity_1.Consulta, tratamiento_entity_1.Tratamiento]),
        ],
        controllers: [consulta_controller_1.ConsultaController, tratamiento_controller_1.TratamientoController],
        providers: [consulta_service_1.ConsultaService, tratamiento_service_1.TratamientoService],
    })
], AppModule);
