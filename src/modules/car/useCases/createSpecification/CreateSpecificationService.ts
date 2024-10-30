import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/interface/ISpecificationRepository";

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
            throw new Error("Specification Already Exists");
        }

        this.specificationRepository.create({
            name,
            description
        });
    }
}

export { CreateSpecificationService };