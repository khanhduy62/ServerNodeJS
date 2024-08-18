import e from 'express'
import express from 'express'
import { loginController, registerController } from '~/controllers/users.controllers'
import { accessTokenValidator, loginValidator, registerValidator } from '~/middlewares/users.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'

const usersRouter = express.Router()

usersRouter.post('/login', loginValidator, wrapRequestHandler(loginController))

/**
 * register a new user
 * method: POST
 * body: {name: string, email: string, password: string, confirm_password: string, date_of_birth: ISO}
 */
usersRouter.post('/register', registerValidator, wrapRequestHandler(registerController))

/**
 * logout a user
 * method: POST
 * header: {Authorization: Bearer <access_token>}
 * body: {refresh_token: string}
 */
usersRouter.post(
  '/logout',
  accessTokenValidator,
  wrapRequestHandler(async (req, res) => {
    return res.json({ message: 'logout' })
  })
)

export default usersRouter
