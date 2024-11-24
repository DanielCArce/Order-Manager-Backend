import { Request, Response, NextFunction } from 'express'
export default async function (request: Request, response: Response, next: NextFunction) {
    const headerAuth:string | undefined = request.headers['authorization'];
    if (headerAuth) {
        
    }
}