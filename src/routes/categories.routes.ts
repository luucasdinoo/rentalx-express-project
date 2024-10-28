import { Router } from "express";
import { createCategoryController, listCategoryController } from "../modules/car/controllers/createCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
    return listCategoryController.handle(req, res);
});

export { categoriesRoutes };