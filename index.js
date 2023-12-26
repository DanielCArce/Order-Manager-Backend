import dotenv from 'dotenv'
import app from './src/api.js'
dotenv.config()
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}/api/v1/`))
