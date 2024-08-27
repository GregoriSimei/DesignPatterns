import { IUser } from "../../../domain/entities/IUser";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { ExternalAPI } from "../../../infra/http/client/ExternalAPI";
import { IExternalAPI } from "../../../infra/http/client/IExternalAPI";
import { UserRepository } from "../../../infra/repositories/UserRepository";
import { IUpdateUserService } from "./IUpdateUserService";

export class UpdateUserService implements IUpdateUserService {
    constructor (
        private externalAPIClient: IExternalAPI = new ExternalAPI(),
        private userRepository: IUserRepository = new UserRepository()
    ) {}

    async execute(user: IUser): Promise<void> {
        this.externalAPIClient.addObservable(this.userRepository)

        const { email, id, name } = user

        await this.printUserInfos(id)

        await this.externalAPIClient.update({
            email,
            id,
            nome: name
        })

        await this.printUserInfos(id)
    }

    async printUserInfos(id: string): Promise<void> {
        const userDBFound = await this.userRepository.find(id)
        const userAPIFound = await this.externalAPIClient.findUser(id)

        console.log('User DB', userDBFound)
        console.log('User API', userAPIFound)
    }
}