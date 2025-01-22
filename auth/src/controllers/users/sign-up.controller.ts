import { Request, Response } from "express";
import { validationResult } from "express-validator";

interface ErrorModified extends Error {
    reasons?: any[];
}



export const signUpController = (req:Request,res:Response) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        const error:ErrorModified = new Error("Validation failed")
        error.reasons = errors.array();
        throw error
    }

    const {email,password} = req.body;

    if(email && password) {
        res.status(200).json({
            status:'success',
            message: "route not implemented yet"
        })
    }
}