import redis from 'redis'
export const client = redis.createClient()
client.on('error', (err) => {
    console.log(err)
})
client.on('ready', (m) => {
    console.log('Cache is running')
})
export async function readRedisCache(storeName) {
    try {
        let storeInfo = await client.get(storeName)
    return JSON.parse(storeInfo)
    } catch (error) {
        console.error(error.message)
        return false
    }
}
export async function writeRedisCache(storeName, storeData) {
    return await client.set(storeName, JSON.stringify(storeData)).finally(() => {
        let todayDate = new Date().setHours(23,59,59,999)
        client.expireAt(storeName,parseInt(todayDate/1000))
    })
}