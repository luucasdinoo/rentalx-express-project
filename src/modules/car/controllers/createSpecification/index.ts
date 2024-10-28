import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { CreateSpecificationService } from "../../services/CreateSpecificationService";
import { CreateSpecificationController } from "./CreateSpecificationController";


const specificationRepository = new SpecificationRepository();
const createSpecificationService = new CreateSpecificationService(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationService);

export { createSpecificationController };