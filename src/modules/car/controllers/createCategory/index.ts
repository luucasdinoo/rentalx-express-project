import { CategoryRepository } from "../../repositories/CategoryRepository";
import { CreateCategoryService } from "../../services/CreateCategoryService";
import { CreateCategoryController } from "./CreateCategoryController";

const categoryRepository = CategoryRepository.getInstance();

const createCategoryService = new CreateCategoryService(categoryRepository);
const createCategoryController = new CreateCategoryController(createCategoryService);


export { createCategoryController };