import {Request,Response, NextFunction } from "express";
import { CustomError } from "../../../common/src/errors/custom-error";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {  
    if (err instanceof CustomError) {
      return res.status(err.statusCode).json({
        status: "failed",
        errors: err.serializeErrors(),
      });
    }

    if(err.message == "jwt must be provided") {
      return res.status(401).json({
        status: "failed",
        errors: [{ message: "Unauthorized" }],
      });
    };

  return res.status(400).json({
      status: "failed",
      errors: [{ message: err.message || "Something went wrong" }],
    });
  };
  