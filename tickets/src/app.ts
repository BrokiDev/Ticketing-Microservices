import { config } from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors';
import morgan from "morgan";
import { NotFoundError } from "@bticket/common";
import { errorHandler } from "@bticket/common";
import  Routes  from "./routes";

config({
 path: '.env' 
})

const app = express();
app.use(express.json());
app.use(morgan("dev"));



app.use("/api",Routes.tickets);

app.use('*', (req,res,next) => {
  next(new NotFoundError(`Cannot find the route ${req.originalUrl} on this server`));
})

app.use((err:Error,req:Request,res:Response,next:NextFunction) => {
  errorHandler(err,req,res,next)
});

export default app;