import { AppDataSource } from "../../../database/data-source";
import { Category } from "../entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./interface/ICategoryRepository";
import { Repository } from "typeorm";

class CategoryRepository implements ICategoryRepository {
    private repository: Repository<Category>;

    constructor(){
        this.repository = AppDataSource.getRepository(Category);    
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void>{

        const category = this.repository.create({
            description,
            name,
        });

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name: string): Promise<Category>{
        const category = await this.repository.findOneBy({ name });
        return category;
    }
}

export { CategoryRepository };