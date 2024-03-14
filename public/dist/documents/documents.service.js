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
exports.DocumentsService = void 0;
const common_1 = require("@nestjs/common");
const contract_service_1 = require("../contract/contract/contract.service");
let DocumentsService = class DocumentsService {
    constructor(contractService) {
        this.contractService = contractService;
    }
    async create(file, id) {
        const data = {
            id,
            document: file.buffer.toString('base64'),
        };
        try {
            await this.contractService.updated(data);
            return { data: 'Archivo subido correctamente' };
        }
        catch (e) {
            console.log(`[ERROR] -  ${new Date().toLocaleString()} : ${e.message}`);
            throw new common_1.BadRequestException(`Error to upload file`, { description: e.message });
        }
    }
};
DocumentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [contract_service_1.ContractService])
], DocumentsService);
exports.DocumentsService = DocumentsService;
//# sourceMappingURL=documents.service.js.map