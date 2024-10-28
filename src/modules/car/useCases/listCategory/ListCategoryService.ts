import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/interface/ICategoryRepository";


class ListCategoryService {
    constructor(private categoryRepository: ICategoryRepository){}

    execute(): Category[] {
        const categories = this.categoryRepository.list();
        return categories;
    }
}

export { ListCategoryService };