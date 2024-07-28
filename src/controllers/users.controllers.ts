import express, { Request, Response, NextFunction, response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { RegisterRequestBody } from '~/models/requests/User.request'
import User from '~/models/schemas/User.schema'
import databaseService from '~/services/database.services'
import usersService from '~/services/user.services'

export const loginController = (req: Request, res: Response) => {
  const { email } = req.body

  if (email === 'duy@gmail.com') {
    return res.json({
      message: 'login successfully'
    })
  }

  return res.status(400).json({
    message: 'sai email'
  })
}

export const registerController = async (
  req: Request<ParamsDictionary, unknown, RegisterRequestBody>,
  res: Response
) => {
  try {
    const result = await usersService.register(req.body)

    return res.json({
      message: 'register successfully',
      result
    })
  } catch (error) {
    console.log('log--error ', error)
    return res.status(400).json({
      message: 'register failed'
    })
  }
}
