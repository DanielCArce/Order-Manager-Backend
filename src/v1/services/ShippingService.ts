import { Shippings } from '@prisma/client';
import prisma from '@/prisma'

import DatabaseService from '@services/DatabaseService';
export class ShippingService extends DatabaseService<Shippings>{
    constructor() {
        super(prisma.shippings)
    }
}
export default ShippingService