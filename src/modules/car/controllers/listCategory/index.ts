import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ListCategoryService } from "../../services/ListCategoryService";
import { ListCategoryController } from "./ListCategoryController"; 

const categoryRepository = CategoryRepository.getInstance();

const listCategoryService = new ListCategoryService(categoryRepository);
const listCategoryController = new ListCategoryController(listCategoryService);

export { listCategoryController };