"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvSchema = void 0;
const Joi = require("joi");
exports.EnvSchema = Joi.object({
    VERSION_API: Joi.required().default('dev'),
    POSTGRES_DB: Joi.required(),
    POSTGRES_USERNAME: Joi.required(),
    POSTGRES_PASSWORD: Joi.required(),
    POSTGRES_PORT: Joi.required(),
    PORT: Joi.required().default(3000),
    JWT_SECRET: Joi.required(),
    STATUS_CANCEL_REQUEST: Joi.required(),
    DAYS_STATUS_CANCEL: Joi.required(),
    PATH_TEMPLATES: Joi.required(),
});
//# sourceMappingURL=env.schema.js.map