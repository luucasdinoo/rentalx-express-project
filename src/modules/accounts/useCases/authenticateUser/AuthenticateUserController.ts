import { Request, response, Response } from "express"
import { AuthenticateUserService } from "./AuthenticateUserService";
import { container } from "tsyringe";

class AuthenticateUserController{
    async handle(req: Request, res: Response): Promise<Response>{
        const { email, password} = req.body;
        
        const authenticateUserService = container.resolve(AuthenticateUserService);
        const token = await authenticateUserService.execute({email, password});
        
        return res.json(token);
    }
}

export { AuthenticateUserController }