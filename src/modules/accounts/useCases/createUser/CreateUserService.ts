import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { IUsersRepository } from "@modules/accounts/repositories/interface/IUsersRepository";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { AppError } from "@errors/AppError";

@injectable()
class CreateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {

        const userAlreadyExist = await this.usersRepository.findByEmail(email);
        if(userAlreadyExist){
            throw new AppError("User already exists");
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name,
            password: passwordHash,
            email,
            driver_license,
        });
    } 
}

export { CreateUserService }