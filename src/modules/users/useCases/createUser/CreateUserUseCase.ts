import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
}

class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ email, name }: IRequest): User {
        const userAlreadExists = this.usersRepository.findByEmail(email);
        if (userAlreadExists) {
            throw new Error("User alread exists");
        }
        return this.usersRepository.create({ name, email });
    }
}

export { CreateUserUseCase };
