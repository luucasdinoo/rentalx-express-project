import { inject, injectable } from "tsyringe";
import { Category } from "@modules/car/entities/Category";
import { ICategoryRepository } from "@modules/car/repositories/interface/ICategoryRepository";

@injectable()
class ListCategoryService {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository){}

    async execute(): Promise<Category[]> {
        const categories = await this.categoryRepository.list();
        return categories;
    }
}

export { ListCategoryService };