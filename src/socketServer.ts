import { Server } from 'socket.io'
import {createServer} from 'node:http2'
import app from '@/server'
const httpServer = createServer(app)
const io = new Server(httpServer, {
    
})


export default httpServer
