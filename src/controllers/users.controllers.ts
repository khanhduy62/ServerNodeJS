import express, { Request, Response, NextFunction, response } from 'express'
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

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const result = await usersService.register({
      email,
      password
    })

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
