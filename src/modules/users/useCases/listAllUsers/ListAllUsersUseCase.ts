import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const usersAdmin = this.usersRepository.findById(user_id);

        if (!usersAdmin.admin) {
            throw new Error("User without authorization");
        }

        return this.usersRepository.list();
    }
}

export { ListAllUsersUseCase };
