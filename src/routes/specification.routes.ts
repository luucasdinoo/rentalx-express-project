import { Router } from "express";
import { CreateSpecificationController } from "../modules/car/useCases/createSpecification/CreateSpecificationController";
import { ensure } from "../middlewares/ensureAuthenticated";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.use(ensure);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };