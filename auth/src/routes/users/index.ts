import { Router } from "express";
import { body } from "express-validator";
import { signUpController } from "../../controllers/users/index";

const userRoutes = Router();

userRoutes.post(
  "/signup",
  [
    body("email").isEmail().withMessage("email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("password must be between 4 and 20 characters"),
  ],
  signUpController
);
userRoutes.post("/signin", (req, res) => {
  console.log("route not implemented yet");
  res.send("route not implemented yet");
});
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
