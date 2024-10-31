import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import "express-async-errors";
import { router } from "./routes";
import { AppDataSource } from "@database/data-source";
import "@shared/container"
import { AppError } from "@errors/AppError";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }
    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`,
    });
});

AppDataSource.initialize()
    .then(async () => {
        console.log("DATABASE OK");
        app.listen(8080, () => console.log("Server is running in port 8080"));
    });