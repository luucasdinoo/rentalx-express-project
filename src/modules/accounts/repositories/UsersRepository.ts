import { Repository } from "typeorm";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "./interface/IUsersRepository";
import { User } from "@modules/accounts/entities/User";
import { AppDataSource } from "@database/data-source";


class UsersRepository implements IUsersRepository{
    private repository: Repository<User>;

    constructor(){
        this.repository = AppDataSource.getRepository(User);
    }

    async create({ name, password, email, driver_license, avatar, id}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            password,
            email,
            driver_license,
            isAdmin: false,
            id,
            avatar
        });
        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOneBy({email});
        return user;
    }

    async findById(id: string): Promise<User>{
        const user = await this.repository.findOneBy({id});
        return user;
    }
}

export { UsersRepository }