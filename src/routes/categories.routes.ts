import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/car/useCases/createCategory";
import { listCategoryController } from "../modules/car/useCases/listCategory";
import { importCategoryController } from "../modules/car/useCases/importCategory";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
    return listCategoryController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
    console.log("Teste")
    return importCategoryController.handle(req, res);
});

export { categoriesRoutes };