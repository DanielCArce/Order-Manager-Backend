import {Request, Response} from 'express'
import UserService from '../services/UserService';
const service = new UserService();
export async function CreateUserController(request: Request, response: Response) {
    const user = request.body;
    const existEmail = await service.alreadyExistEmail(user.email);
    if (!existEmail) {   
        await service.create(user);
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