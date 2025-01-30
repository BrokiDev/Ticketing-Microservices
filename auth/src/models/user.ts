import mongoose from "mongoose";

export interface IUser {
    name: string
    lastName:string
    email:string
    password:string
}

interface userModel extends mongoose.Model<UserDoc> {
    createNewUser(attrs:IUser):UserDoc
}

interface UserDoc extends mongoose.Document {
    email:string
    password:string
    updatedAt:Date
}



const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true,
        minlength: 8,
    },
})

userSchema.statics.createNewUser = (attrs:IUser) => {
    return new User(attrs)
}

export const User = mongoose.model<UserDoc,userModel>('User', userSchema);



 


