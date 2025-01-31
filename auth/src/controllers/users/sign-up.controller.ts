import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../errors/bad-request-error";
import { User } from "../../models/user";




export const signUpController = async (req:Request,res:Response,next:NextFunction) => {
    const {name,lastName,email,password} = req.body
    if(await User.findOne({email})) {
        return next(new BadRequestError("Email is already in use"))
    }

     const userCreated = User.createNewUser({
        name,lastName,email,password
    })

    await userCreated.save();

    res.status(201).json({
        status: "created",
        data:userCreated
    })
}