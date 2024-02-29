import dotenv from 'dotenv'
dotenv.config()
import app from './src/server.js'
const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${server.address().port}/`)
})
