"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtectRouteDecorator = exports.META_ROLES = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const role_guard_1 = require("../guards/role.guard");
exports.META_ROLES = 'roles';
function ProtectRouteDecorator(...roles) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)(exports.META_ROLES, roles), (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), role_guard_1.RoleGuard));
}
exports.ProtectRouteDecorator = ProtectRouteDecorator;
//# sourceMappingURL=protect-route.decorator.js.map