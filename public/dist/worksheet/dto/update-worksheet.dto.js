"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorksheetDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_worksheet_dto_1 = require("./create-worksheet.dto");
class UpdateWorksheetDto extends (0, swagger_1.PartialType)(create_worksheet_dto_1.CreateWorksheetDto) {
}
exports.UpdateWorksheetDto = UpdateWorksheetDto;
//# sourceMappingURL=update-worksheet.dto.js.map