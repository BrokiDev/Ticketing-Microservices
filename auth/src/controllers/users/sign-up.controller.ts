import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../../errors/request-validation-error";
import { DatabaseConnectionError } from "../../errors/database-connection-error copy";

// interface ErrorModified extends Error {
//     reasons?: any[];
// }



export const signUpController = (req:Request,res:Response) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        throw new RequestValidationError(errors.array())
    }

    const {email,password} = req.body;

    console.log('Creating a user...')
    throw new DatabaseConnectionError();

    if(email && password) {
        res.status(200).json({
            status:'success',
            message: "route not implemented yet"
        })
    }
}