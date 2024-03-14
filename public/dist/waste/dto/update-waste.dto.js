"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWasteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_waste_dto_1 = require("./create-waste.dto");
class UpdateWasteDto extends (0, swagger_1.PartialType)(create_waste_dto_1.CreateWasteDto) {
}
exports.UpdateWasteDto = UpdateWasteDto;
//# sourceMappingURL=update-waste.dto.js.map