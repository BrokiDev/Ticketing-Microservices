import { Request,Response,NextFunction } from "express";
import { JWT_Service } from "../services/jwt.service";
import { BadRequestError } from "../errors/bad-request-error";
import { IUser, User } from "../models/user";

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

  const user = await User.findById(validToken.id);

    if(!user) {
        return next(new BadRequestError("User not found"))
    }

    req.user = user as unknown as IUser;

  next();
}