import { Request,Response,NextFunction } from "express";
import { JWT_Service } from "../services/jwt.service";
import { BadRequestError } from "../errors/bad-request-error";

export interface IUser {
  id: string;
  name: string
  lastName:string
  email:string
  password:string
}

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}


export const authMiddleware = async (req:Request,res:Response,next:NextFunction) => {
  const session_token = req.headers.cookie?.split("=")[1];

  const validToken = JWT_Service.verifyToken(session_token as string);

  if (!validToken) {
    return next(new BadRequestError("You don't have access to this route"));
  }

  req.user = validToken as IUser;

  next();
}