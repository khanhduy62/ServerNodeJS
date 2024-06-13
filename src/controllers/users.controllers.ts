import express, { Request, Response, NextFunction, response } from 'express'

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
