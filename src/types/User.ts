export interface INewUser {
    name: string;
    email: string;
    password: string;
}
export interface IUpdateUser{
    userID: number;
    data: {
        password: string;
    }
}