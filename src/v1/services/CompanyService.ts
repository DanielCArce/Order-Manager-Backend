import { Companies } from '@prisma/client';
import prisma from '@/prisma'

import DatabaseService from '@services/DatabaseService';
export class CompanyService extends DatabaseService<Companies>{
    constructor() {
        super(prisma.companies)
    }
}
export default CompanyService