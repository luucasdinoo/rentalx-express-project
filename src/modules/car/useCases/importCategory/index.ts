import { ImportCategoryService } from "./ImportCategoryService";
import { ImportCategoryController } from "./ImportCategoryController";
import { CategoryRepository } from "../../repositories/CategoryRepository";

const categoryRepository = CategoryRepository.getInstance();
const importCategoryService = new ImportCategoryService(categoryRepository);
const importCategoryController = new ImportCategoryController(importCategoryService);

export { importCategoryController };