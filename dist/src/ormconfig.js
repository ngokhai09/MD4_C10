"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let dataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'testdb',
    synchronize: true,
    entities: ['./src/models/*.ts'],
    migrations: ['./src/migrations/*.ts'],
    migrationsTableName: 'migrations'
});
exports.default = dataSource;
//# sourceMappingURL=ormconfig.js.map