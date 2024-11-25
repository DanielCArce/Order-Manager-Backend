import { Orders } from '@prisma/client';
import prisma from '@/prisma'

import DatabaseService from '@services/DatabaseService';

export class OrderService extends DatabaseService<Orders> {
    constructor() {
        super(prisma.orders);
    }
}
export default OrderService