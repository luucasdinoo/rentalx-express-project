import { Request, Response } from "express";
import { ListCategoryService } from "./ListCategoryService"; 
import { container } from "tsyringe";

class ListCategoryController{

    async handle(req: Request, res: Response): Promise<Response> {
        const listCategoryService = container.resolve(ListCategoryService)
        const all = await listCategoryService.execute();
        return res.json(all);
    }
}

export { ListCategoryController };