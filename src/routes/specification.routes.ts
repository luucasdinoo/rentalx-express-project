import { Router } from "express";
import { createSpecificationController } from "../modules/car/controllers/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
    return createSpecificationController.handle(req, res);
});

export { specificationsRoutes };