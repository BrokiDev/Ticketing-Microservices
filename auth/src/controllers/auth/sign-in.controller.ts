import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../errors/bad-request-error";
import { User } from "../../models/user";
import { JWT_Service } from "../../services/jwt.service";
import { EncryptionPass } from "../../services/encrypt-password";

export const signInController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (
    !user ||
    !(await EncryptionPass.decryptPassword(password, user.password))
  ) {
    return next(new BadRequestError("Invalid credentials"));
  }

  JWT_Service.generateToken(
    {
      id: user.id,
      email: user.email,
    },
    res
  );

  res.status(200).json({
    status: "success",
    message: "Login Successfully",
  });
};
