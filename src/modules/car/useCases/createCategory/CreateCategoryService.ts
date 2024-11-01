import { AppError } from "@errors/AppError";
import { ICategoryRepository } from "@modules/car/repositories/interface/ICategoryRepository";
import { inject, injectable } from "tsyringe";

interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateCategoryService{

    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository){}

    async execute({ name, description }: IRequest): Promise<void>{

        const categoryAlreadyExists = await this.categoryRepository.findByName(name);
        if(categoryAlreadyExists){
            throw new AppError("Category Already Exists!");
        }
    
        await this.categoryRepository.create({ name, description});
    }
}

export { CreateCategoryService };