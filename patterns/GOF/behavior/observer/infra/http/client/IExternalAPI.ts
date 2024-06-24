import { IUser } from "../../../domain/entities/IUser";
import { IUserUpdateObservable } from "../../../domain/observables/IUserUpdateObservable";
import { IObservable } from "../../../shared/observer/IObservable";
import { IUserFromAPI } from "./entities/IUserFromAPI";

export interface IExternalAPI extends IObservable<IUserUpdateObservable, IUser> {
    findUser(id: string): Promise<IUserFromAPI | null>
    update(user: IUserFromAPI): Promise<void>
} 