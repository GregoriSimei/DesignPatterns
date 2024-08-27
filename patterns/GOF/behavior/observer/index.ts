import { IUpdateUserService } from "./application/services/UpdateUserService/IUpdateUserService";
import { UpdateUserService } from "./application/services/UpdateUserService/UpdateUserService";
import { IUser } from "./domain/entities/IUser";

const updateUserService: IUpdateUserService = new UpdateUserService()

const newUserInfo: IUser = {
    id: '1',
    email: 'gregori@gmail.com',
    name: 'gregori'
}

updateUserService.execute(newUserInfo).then( () => {
    console.log('Finish')
    process.exit()
})
