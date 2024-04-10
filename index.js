import dotenv from 'dotenv'
// import cluster from 'node:cluster'
// import os from 'node:os'
// import process from 'node:process'
// const numb = os.availableParallelism()
dotenv.config()
import app from './src/server.js'
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '127.0.0.1'

// if (cluster.isPrimary) { 
//     console.log(`Master in ${process.pid}`)
//     for (let i = 0; i < numb; i++){
//         cluster.fork()
//     }
// } else {

    const server = app.listen(PORT, () => {
        console.log(`Server is running in http://${server.address().address}:${server.address().port}/`)
    })
//}
