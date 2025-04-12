import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "@bticket/common";
import { User } from "../../models/user";
import { JWT_Service } from "../../services/jwt.service";




export const signUpController = async (req:Request,res:Response,next:NextFunction) => {
    const {name,lastName,email,password} = req.body
    if(await User.findOne({email})) {
        return next(new BadRequestError("Email is already in use"))
    }

     const userCreated = User.createNewUser({
        name,lastName,email,password
    })

    await userCreated.save();

    JWT_Service.generateToken({
        id: userCreated.id,
        email:userCreated.email
    },res);

    res.status(201).json({
        status: "created",
        data:userCreated
    })
}
