import { Router } from "express";
import { body } from "express-validator";
import {
  signInController,
  signUpController,
} from "../../controllers/users/index";
import { validateRequest } from "../../middlewares/validate-request";

const userRoutes = Router();

userRoutes.post(
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
userRoutes.post(
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
userRoutes.post("/signout", (req, res) => {
  console.log("route not implemented yet");
  res.send("route not implemented yet");
});
userRoutes.get("/currentUser", (req, res) => {
  console.log("route not implemented yet");
  res.send("route not implemented yet");
});

userRoutes.get("/broki", (req, res) => {
  console.log("route not implemented yet");
  res.json({
    status: "success",
    message: "route not implemented yet",
  });
});

export default userRoutes;
