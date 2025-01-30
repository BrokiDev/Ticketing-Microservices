import mongoose from "mongoose";
import { DatabaseConnectionError } from "../../errors/database-connection-error copy";
import { config } from "dotenv";


config({
    path: '.env'
})


export const dbInitialized = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI ?? '')
        console.log('The connection to the Database is Successfully')
    } catch (error) {
        console.log('err',error)
        throw new DatabaseConnectionError()
    }
}