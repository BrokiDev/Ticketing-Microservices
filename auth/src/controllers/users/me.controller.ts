import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../errors/bad-request-error";
import { JWT_Service } from "../../services/jwt.service";
import { User } from "../../models/user";

export const meController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const session_token = req.headers.cookie?.split("=")[1];

  const validToken = JWT_Service.verifyToken(session_token as string);

  if (!validToken) {
    return next(new BadRequestError("Invalid token"));
  }

  const user = await User.findById(validToken.id);


  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};
