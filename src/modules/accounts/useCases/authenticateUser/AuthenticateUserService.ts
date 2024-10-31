import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "../../repositories/interface/IUsersRepository";


interface IRequest{
    email: string;
    password: string;
}

interface IResponse{
    user: {
        name: string;
        email: string;
    },
    token: string;
}

@injectable()
class AuthenticateUserService{
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({ email, password}: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);
        if(!user){
            throw new Error("Email or password incorrect!!")
        }

        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch){
            throw new Error("Email or password incorrect!!");
        }

        const token = sign({}, "31508e5fefda9ca7504dcdda3e6f9fbc", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            }
        }
        return tokenReturn;
    }
}

export { AuthenticateUserService }