import { Request, Response } from "express";
import { ListCategoryService } from "../../services/ListCategoryService"; 

class ListCategoryController{
    constructor(private listCategoryService: ListCategoryService){}

    handle(req: Request, res: Response): Response{
        const all = this.listCategoryService.execute();
        return res.json(all);
    }
}

export { ListCategoryController };