import db from './index.js'

export async function create_new_order(orderData) {
    try {
        let newOrder = db.order.create()
    } catch (error) {
        throw new Error(error.message)
    }
}