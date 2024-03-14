"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const AppConfig = () => ({
    environment: process.env.NODE_ENV,
    version: process.env.VERSION_API || 'v1',
    postgresUsername: process.env.POSTGRES_USERNAME,
    postgresPassword: process.env.POSTGRES_PASSWORD,
    postgresDB: process.env.POSTGRES_DB,
    postgresPORT: +process.env.POSTGRES_PORT,
    port: +process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET,
    statusCancelRequest: process.env.STATUS_CANCEL_REQUEST,
    daysStatusCancel: process.env.DAYS_STATUS_CANCEL,
    pathTemplates: process.env.PATH_TEMPLATES,
});
exports.AppConfig = AppConfig;
//# sourceMappingURL=app.config.js.map