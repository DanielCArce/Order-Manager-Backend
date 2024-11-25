import dotenv from 'dotenv'
dotenv.config();
import socketServer from '@/socketServer'
const PORT = process.env.PORT || 3000;

socketServer.listen(PORT, () => {
    console.log(`Http Server is running in http://localhost:${PORT}`)
    console.log(`WebSocket Server is running in ws://localhost:${PORT}`)
})