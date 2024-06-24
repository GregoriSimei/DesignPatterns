import { IUser } from "../../../domain/entities/IUser";
import { IUserUpdateObservable } from "../../../domain/observables/IUserUpdateObservable";
import { Observable } from "../../../shared/observer/Observer";
import { IExternalAPI } from "./IExternalAPI";
import { IUserFromAPI } from "./entities/IUserFromAPI";

const data: IUserFromAPI[] = [
    {
        email: 'test@test.com',
        id: '1',
        nome: 'test'
    }
]

export class ExternalAPI extends Observable<IUserUpdateObservable, IUser> implements IExternalAPI { 
    async findUser(id: string): Promise<IUserFromAPI | null> {
        return data.find(item => item.id == id) || null
    }

    async update(user: IUserFromAPI): Promise<void> {
        const indexFound = data.findIndex(item => item.id == user.id)
        
        if(indexFound >= 0) {
            data[indexFound].email = user.email
            data[indexFound].nome = user.nome

            this.notifyObservers(
                {
                    id: user.id,
                    email: user.email,
                    name: user.nome
                },
                "updateUser"
            )
        }
    }
}