import { Router } from "express";
import { Category } from "../modules/car/model/Category";
import { CategoryRepository } from "../modules/car/repositories/CategoryRepository"; 
import { CreateCategoryService } from "../modules/car/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const createCategoryService = new CreateCategoryService(categoryRepository);
    createCategoryService.execute({ name, description });
    return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
    const all = categoryRepository.list();
    return res.json(all);
});

export { categoriesRoutes };