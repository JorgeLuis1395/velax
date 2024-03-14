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
exports.CreateRememberInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreateRememberInput = class CreateRememberInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRememberInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRememberInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateRememberInput.prototype, "recurrent", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRememberInput.prototype, "customer", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateRememberInput.prototype, "initialDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Number),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateRememberInput.prototype, "time", void 0);
CreateRememberInput = __decorate([
    (0, graphql_1.InputType)()
], CreateRememberInput);
exports.CreateRememberInput = CreateRememberInput;
//# sourceMappingURL=create-remember.input.js.map