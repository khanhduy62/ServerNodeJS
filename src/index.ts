import dotenv from 'dotenv'
import express, { NextFunction, Request, RequestHandler, Response } from 'express'
import bodyParser from 'body-parser'

dotenv.config()

import databaseService from '~/services/database.services'
import usersRouter from './routes/users.routers'
import { defaultErrorHandler } from './middlewares/errors.middlewares'

const app = express()
const port = 3000

// Use body-parser middleware
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/users', usersRouter)

databaseService.connect().catch(console.dir)

app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
