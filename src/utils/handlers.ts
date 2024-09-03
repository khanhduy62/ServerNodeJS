import { Request, Response, NextFunction } from 'express'

type AsyncHandler<P> = (req: Request<P>, res: Response, next: NextFunction) => Promise<any>

export const wrapRequestHandler = <P>(handler: AsyncHandler<P>) => {
  return (req: Request<P>, res: Response, next: NextFunction) => {
    handler(req, res, next).catch(next)
  }
}
