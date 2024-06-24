import { IUser } from "../../../domain/entities/IUser";

export interface IUpdateUserService {
    execute(user: IUser): Promise<void>
} 