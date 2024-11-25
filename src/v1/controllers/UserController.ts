import {Request, Response} from 'express'
import UserService from '@services/UserService';
import { generateHash } from '@utils/encrypt';
import {INewUser, IUpdateUser} from '@dto/User'
const service = new UserService();
export async function CreateUserController(request: Request, response: Response) {
    const user:INewUser = request.body;
    const existEmail = await service.alreadyExistEmail(user.email);
    if (!existEmail) {   
        await service.create({
            ...user,
            password:  await generateHash(user.password)
        });
         response.status(201);
    }
     response.status(401);
}
export async function UpdateUserInfoController(request: Request, response: Response) {
    const userID= Number(request.params.userID);
    const content = request.body;
    await service.update(userID, content);
    response.status(202);
}
export async function DeleteUserController(request: Request, response: Response) {
    const userID = Number(request.params.userID);
    await service.delete(userID);
}