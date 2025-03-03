import { Request, Response, Router, } from "express";
import {
  meController
} from "../../controllers/users/index";
import { authMiddleware } from "../../middlewares/authMiddleware";

const userRoutes = Router();
userRoutes.get("/currentUser",meController);

userRoutes.get("/test",authMiddleware, (req:Request,res:Response) => {
  res.status(200).json({
    status:"success",
    message: "Protected Route"
  })
});


export default userRoutes;
