import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "@modules/car/repositories/interface/ISpecificationRepository";
import { AppError } from "@errors/AppError";

interface IRequest{
    name: string,
    description: string
}

@injectable()
class CreateSpecificationService{
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository){}

    async execute({ name, description }: IRequest): Promise<void>{
        const specificationAlreadyExists = await this.specificationRepository.findByName(name);
        if(specificationAlreadyExists){
            throw new AppError("Specification Already Exists");
        }

        this.specificationRepository.create({
            name,
            description
        });
    }
}

export { CreateSpecificationService };