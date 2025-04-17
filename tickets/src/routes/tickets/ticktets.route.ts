import Router  from "express";
import { authMiddleware} from "@bticket/common"

const ticketsRouter = Router();


ticketsRouter.get("/tickets",authMiddleware,(req,res) => {
    res.status(200).json({
        status:"pending",
        message:"route not implemented yet"
    })
});
ticketsRouter.get("/tickets/:id",(req,res) => {
    res.status(200).json({
        status:"pending",
        message:"route not implemented yet"
    })
});
ticketsRouter.post("/tickets",(req,res) => {
    res.status(201).json({
        status:"pending",
        message:"route not implemented yet"
    })
});
ticketsRouter.patch("/tickets/:id",(req,res) => {
    res.status(200).json({
        status:"pending",
        message:"route not implemented yet"
    })
});


export default ticketsRouter;