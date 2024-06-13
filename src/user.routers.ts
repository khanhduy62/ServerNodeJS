import express, { Request, Response, NextFunction } from 'express'

const router = express.Router()

// middleware that is specific to this router
const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log('Time: ', Date.now())
  next()
}

router.use(timeLog)

// define the home page route
router.get('/', (req: Request, res: Response) => {
  res.json({
    id: 1,
    data: Array.from({ length: 10 }, (_, i) => i + 1)
  })
})

export default router
