import { Orders } from '@prisma/client';
import prisma from '../../prisma'

import DatabaseService from './DatabaseService';

export class OrderService extends DatabaseService<Orders> {
    constructor() {
        super(prisma.user);
    }
}
export default OrderService