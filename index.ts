import dotenv from 'dotenv'
import app from './src/server'
dotenv.config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running in localhost:3000')
})