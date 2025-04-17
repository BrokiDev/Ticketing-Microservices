import Router  from "express";
import { authMiddleware} from "@bticket/common"
import { getAllTicketsController,createTicketsController,deleteOneTicketsController,getOneTicketsController,updateOneTicketsController } from "../../controllers/tickets";

const ticketsRouter = Router();


ticketsRouter.get("/tickets",authMiddleware,getAllTicketsController);
ticketsRouter.get("/tickets/:id",getOneTicketsController);
ticketsRouter.post("/tickets",createTicketsController);
ticketsRouter.patch("/tickets/:id",updateOneTicketsController);

ticketsRouter.delete("/tickets/:id",deleteOneTicketsController);


export default ticketsRouter;