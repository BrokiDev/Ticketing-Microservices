import {Request, Response } from "express";

export const signOutController = async (
  req: Request,
  res: Response,
) => {


    res.cookie("session_token", "", {
        expires: new Date(Date.now() + 1) , // 1 ms to expire the cookie  
        httpOnly: true,
    });

    res.status(200).json({
        status: "success",
        message: "Logout Successfully",
    })
};
