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
exports.CompaniesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const company_entity_1 = require("./entities/company.entity");
const typeorm_2 = require("typeorm");
const request_service_1 = require("../request/request.service");
let CompaniesService = class CompaniesService {
    constructor(company, request) {
        this.company = company;
        this.request = request;
    }
    async create(createCompanyInput) {
        const newCompany = this.company.create(createCompanyInput);
        return this.company.save(newCompany);
    }
    async findAll() {
        return this.company.findBy({ status: true });
    }
    async findOne(id) {
        return this.company.findOneByOrFail({ id });
    }
    async update(id, updateCompanyInput) {
        const getCompany = await this.findOne(id);
        const updatedData = Object.assign(Object.assign(Object.assign({}, getCompany), updateCompanyInput), { id, updatedAt: new Date() });
        return this.company.save(updatedData);
    }
    async remove(id) {
        const company = await this.findOne(id);
        const data = Object.assign(Object.assign({}, company), { status: false, updatedAt: new Date() });
        await this.company.save(data);
        return data;
    }
    async findByMaes(detailMaes) {
        const companies = await this.findAll();
        const maes = detailMaes.map((item) => item.maeId).map((item) => item.name);
        if (detailMaes.length === 0) {
            return companies;
        }
        return companies.filter((company) => {
            const companyMaesName = company.maes.map((item) => item.name);
            console.log(companyMaesName);
            return maes.every((item) => companyMaesName.includes(item));
        });
    }
    async availableCompany(requestId) {
        const { request } = await this.request.findOne(requestId);
        return this.findByMaes(request.detail);
    }
};
CompaniesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(company_entity_1.Company)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        request_service_1.RequestService])
], CompaniesService);
exports.CompaniesService = CompaniesService;
//# sourceMappingURL=companies.service.js.map