import { Router } from "express";


const userRoutes = Router();



userRoutes.post('signup',(req,res) => console.log("route not implemented yet"))
userRoutes.post('signin',(req,res) => console.log("route not implemented yet"))
userRoutes.post('signout',(req,res) => console.log("route not implemented yet"))
userRoutes.get('currentUser',(req,res) => console.log("route not implemented yet"))




export default userRoutes;