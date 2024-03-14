"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuthDto = void 0;
const create_user_dto_1 = require("./create-user.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateAuthDto extends (0, swagger_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.UpdateAuthDto = UpdateAuthDto;
//# sourceMappingURL=update-auth.dto.js.map