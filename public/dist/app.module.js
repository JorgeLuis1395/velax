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
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const app_config_1 = require("./config/app.config");
const env_schema_1 = require("./config/env.schema");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const role_module_1 = require("./role/role.module");
const address_module_1 = require("./address/address.module");
const customer_module_1 = require("./customer/customer.module");
const request_module_1 = require("./request/request.module");
const catalog_module_1 = require("./catalog/catalog.module");
const detail_catalog_module_1 = require("./detail-catalog/detail-catalog.module");
const instruments_module_1 = require("./instruments/instruments.module");
const mae_module_1 = require("./mae/mae.module");
const waste_module_1 = require("./waste/waste.module");
const request_detail_mae_module_1 = require("./request-detail-mae/request-detail-mae.module");
const driver_module_1 = require("./logistics/driver/driver.module");
const vehicle_module_1 = require("./logistics/vehicle/vehicle.module");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const contact_module_1 = require("./contact/contact.module");
const instruments_request_module_1 = require("./instruments-request/instruments-request.module");
const remember_module_1 = require("./remember/remember.module");
const schedule_1 = require("@nestjs/schedule");
const tasks_module_1 = require("./tasks/tasks.module");
const websocket_module_1 = require("./websocket/websocket.module");
const serve_static_1 = require("@nestjs/serve-static");
const transport_company_module_1 = require("./logistics/transport-company/transport-company.module");
const external_addresses_module_1 = require("./external-addresses/external-addresses.module");
const companies_module_1 = require("./companies/companies.module");
const contract_module_1 = require("./contract/contract/contract.module");
const contract_detail_module_1 = require("./contract-detail/contract-detail.module");
const documents_module_1 = require("./documents/documents.module");
const reception_module_1 = require("./reception/reception.module");
const fix_reception_module_1 = require("./fix-reception/fix-reception.module");
const worksheet_module_1 = require("./worksheet/worksheet.module");
const shipping_guide_module_1 = require("./shipping-guide/shipping-guide.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                load: [app_config_1.AppConfig],
                validationSchema: env_schema_1.EnvSchema,
            }), auth_module_1.AuthModule, typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                username: process.env.POSTGRES_USERNAME,
                password: process.env.POSTGRES_PASSWORD,
                port: +process.env.POSTGRES_PORT,
                database: process.env.POSTGRES_DB,
                autoLoadEntities: true,
                synchronize: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                sortSchema: true,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
            }),
            schedule_1.ScheduleModule.forRoot(),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
            }),
            user_module_1.UserModule, role_module_1.RoleModule, address_module_1.AddressModule, customer_module_1.CustomerModule, request_module_1.RequestModule, catalog_module_1.CatalogModule, detail_catalog_module_1.DetailCatalogModule, instruments_module_1.InstrumentsModule, mae_module_1.MaeModule, waste_module_1.WasteModule,
            request_detail_mae_module_1.RequestDetailMaeModule, driver_module_1.DriverModule, vehicle_module_1.VehicleModule, contact_module_1.ContactModule, instruments_request_module_1.InstrumentsRequestModule, remember_module_1.RememberModule, tasks_module_1.TasksModule, websocket_module_1.WebsocketModule, transport_company_module_1.TransportCompanyModule,
            external_addresses_module_1.ExternalAddressesModule, companies_module_1.CompaniesModule, contract_module_1.ContractModule, contract_detail_module_1.ContractDetailModule, documents_module_1.DocumentsModule, reception_module_1.ReceptionModule, fix_reception_module_1.FixReceptionModule, worksheet_module_1.WorksheetModule, shipping_guide_module_1.ShippingGuideModule],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map