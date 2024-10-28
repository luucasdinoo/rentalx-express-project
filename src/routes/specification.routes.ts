import { Router } from "express";
import { CreateSpecificationService } from "../modules/car/services/CreateSpecificationService";
import { SpecificationRepository } from "../modules/car/repositories/SpecificationRepository";

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/", (req, res) => {
    const { name, description} = req.body;
    const createSpecificationService = new CreateSpecificationService(specificationRepository);

    createSpecificationService.execute({ name, description });
    return res.status(201).send();
});

export { specificationsRoutes };