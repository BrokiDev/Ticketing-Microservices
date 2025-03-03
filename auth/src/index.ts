import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors';
import morgan from "morgan";
import Router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import { NotFoundError } from "./errors/not-found-error";
import { dbInitialized } from "./config/database";
import { config } from "dotenv";

config({
 path: '.env' 
})

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(morgan("dev"));



app.use('/api/users',Router.users);
app.use('/api/auth',Router.auth);

app.use('*', (req,res,next) => {
  next(new NotFoundError(`Cannot find the route ${req.originalUrl} on this server`));
})

app.use((err:Error,req:Request,res:Response,next:NextFunction) => {
  errorHandler(err,req,res,next)
});

dbInitialized();
app.listen(PORT,() => {
  console.log(`Auth service is running on port ${PORT}`);
});



