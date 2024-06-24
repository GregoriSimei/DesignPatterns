import { IUser } from "../../domain/entities/IUser";
import { IUserRepository } from "../../domain/repositories/IUserRepository";

const data: IUser[] = [
    {
        id: '1',
        email: 'test@test.com',
        name: 'test'
    }
]

export class UserRepository implements IUserRepository {
    async find(id: string): Promise<IUser | null> {
        return data.find(item => item.id == id) || null
    }

    async updateUser(user: IUser): Promise<void> {
        const index = data.findIndex(item => item.id == user.id)
        if (index >= 0) {
            data[index].email = user.email
            data[index].name = user.name
        }
    }
}