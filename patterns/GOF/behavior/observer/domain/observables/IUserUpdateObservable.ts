import { IUser } from "../entities/IUser";

export interface IUserUpdateObservable {
    updateUser(user: IUser): Promise<void>
}