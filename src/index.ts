import express from 'express'
import userRouter from './user.routers'
const app = express()
const port = 3000

app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
