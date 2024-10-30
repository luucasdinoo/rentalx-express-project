import { DataSource } from "typeorm";
import { Category } from "../modules/car/entities/Category";
import { Specification } from "../modules/car/entities/Specification";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost", //database
    port: 5432,
    username: "docker",
    password: "docker",
    database: "rentx",
    synchronize: true,
    logging: true,
    entities: [Category, Specification],
    //subscribers: [],
    migrations: ["./src/database/migrations/*ts"],
});

// npm run typeorm migration:create -n ./src/database/migrations/nameMigration
// npm run typeorm migration:run -- -d ./src/database/data-source.ts