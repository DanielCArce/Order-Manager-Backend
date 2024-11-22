import { User } from '@prisma/client';
import prisma from '@root/prisma'

import DatabaseService from '@services/DatabaseService';

export class UserService extends DatabaseService<User> {
    constructor() {
        super(prisma.user);
    }
    
    // You can add custom methods for specific model logic
    async findByEmail(email: string): Promise<User | null> {
        return this.model.findUnique({
            where: { email }
        });
    }
    async alreadyExistEmail(email: string):Promise<boolean> {
        const exist = this.model.findFirst({
            where: {
                email
            }
        });
        return !!exist;
    }
}

export default UserService