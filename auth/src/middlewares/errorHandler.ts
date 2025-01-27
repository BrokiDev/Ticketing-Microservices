import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom-error";


export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction) => {

if(err instanceof CustomError) {
    return res.status(err.statusCode).json({
        status: 'failed',
        errors:err.serializeErrors()

    })
}

res.status(400).json({
    status: 'failed',
    errors:[{message: 'Something went wrong'}]
})
}