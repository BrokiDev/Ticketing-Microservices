
import { config } from 'dotenv';
import { Response } from 'express';
import {sign,verify,decode, JwtPayload} from 'jsonwebtoken'
config({
    path: '.env'
})

const JWT_KEY = process.env.JWT_KEY ?? ""
const JWT_EXPIRES = process.env.JWT_EXPIRES_IN ?? "1d"

console.log({
    JWT_KEY,
    JWT_EXPIRES
})

export class JWT_Service {
    static async generateToken(payload:object,res:Response) {
        const token = sign(payload,JWT_KEY, {
            expiresIn: "1d",
        })

        return res.cookie('session_token',token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        })
    }
    static verifyToken(token:string):JwtPayload&{id:string,email:string}  {
        return verify(token,JWT_KEY || "") as JwtPayload&{id:string,email:string};
    }
}