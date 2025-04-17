import { Request, Response } from "express";

export const createTicketsController = (req: Request, res: Response) => {
  res.status(200).json({
    status: "pending",
    message: "route not implemented yet",
  });
};
