import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { IUsersRepository } from "../../repositories/interface/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

@injectable()
class CreateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {

        const userAlreadyExist = await this.usersRepository.findByEmail(email);
        if(userAlreadyExist){
            throw new Error("User already exists");
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