"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFullName1676616427705 = void 0;
class UserFullName1676616427705 {
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "title" RENAME TO "name"`);
    }
    async down(queryRunner) { }
}
exports.UserFullName1676616427705 = UserFullName1676616427705;
//# sourceMappingURL=1676616427705-UserFullName.js.map