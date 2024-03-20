import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
prisma.$on('error', (e) => {
  console.log(e)
  throw new Error(e.message)
})
export default prisma