import dotenv from 'dotenv'
import express, { NextFunction, Request, RequestHandler, Response } from 'express'
import bodyParser from 'body-parser'
import cors, { CorsOptions } from 'cors'

dotenv.config()

import databaseService from '~/services/database.services'
import usersRouter from './routes/users.routers'
import mediasRouter from './routes/medias.routers'
import { defaultErrorHandler } from './middlewares/errors.middlewares'
import { envConfig, isProduction } from './constants/config'
import { initFolder } from './utils/file'
import staticRouter from './routes/static.routes'
import { UPLOAD_VIDEO_DIR } from './constants/dir'

const app = express()
const port = envConfig.port

const corsOptions: CorsOptions = {
  origin: isProduction ? envConfig.clientUrl : '*'
}

app.use(cors(corsOptions))

initFolder()

// Use body-parser middleware
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/users', usersRouter)
app.use('/medias', mediasRouter)
app.use('/static', staticRouter)
app.use('/static/video', express.static(UPLOAD_VIDEO_DIR))

databaseService.connect().catch(console.dir)

app.use(defaultErrorHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
