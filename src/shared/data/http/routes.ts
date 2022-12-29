import { Router, Response, Request } from "express";

const router = Router()

router.get('/api/user', (res: Response, req: Request) => {
  res.send('Hello world')
})

export { router }