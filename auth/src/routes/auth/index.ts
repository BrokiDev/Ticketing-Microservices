import { Router } from "express";
import { signOutController, signInController, signUpController } from "../../controllers/auth";
import { validateRequest } from "@bticket/common";
import { body } from "express-validator";


const authRoutes = Router();

authRoutes.post(
    "/signup",
    [
      body("email").isEmail().withMessage("email must be valid"),
      body("password")
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage("password must be between 4 and 20 characters"),
    ],validateRequest,
    signUpController
  );
  authRoutes.post(
    "/signin",
    [
      body("email").isEmail().withMessage("email must be valid"),
      body("password")
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage("password must be between 4 and 20 characters"),
    ],validateRequest,
    signInController
  );
authRoutes.get("/signout", signOutController);

export default authRoutes;
