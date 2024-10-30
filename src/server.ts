import express from "express";
import "reflect-metadata";
import { router } from "./routes";
import { AppDataSource } from "./database/data-source";
import "./shared/container"

const app = express();

app.use(express.json());

app.use(router);

AppDataSource.initialize()
    .then(async () => {
        console.log("DATABASE OK");
        app.listen(8080, () => console.log("Server is running in port 8080"));
    });