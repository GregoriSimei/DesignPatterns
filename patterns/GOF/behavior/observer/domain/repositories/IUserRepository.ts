import { IUser } from "../entities/IUser";
import { IUserUpdateObservable } from "../observables/IUserUpdateObservable";

export interface IUserRepository extends IUserUpdateObservable {
    find(id: string): Promise<IUser | null>
}