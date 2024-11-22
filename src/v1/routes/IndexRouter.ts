import { Router, Response, Request } from 'express'

const router = Router()
router.get('/', (_request: Request, response: Response) => {
    response.json({
        "Author": ["Daniel Campos Arce"],
        "Date": new Date()
    })
})
export default router