import { Category } from "@modules/car/entities/Category"; 

interface ICreateCategoryDTO{
    name: string;
    description: string;
}

interface ICategoryRepository{
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description}: ICreateCategoryDTO): Promise<void>;
}

export { ICategoryRepository, ICreateCategoryDTO };