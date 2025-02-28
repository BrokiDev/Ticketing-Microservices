import mongoose from "mongoose";
import { EncryptionPass } from "../services/encrypt-password";

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
    },
}, {
    toJSON: {
        transform(doc,ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
        }
    }
})

userSchema.statics.createNewUser = (attrs:IUser) => {
    return new User(attrs)
}


userSchema.pre("save",async function (done){
    if(this.isModified('password')) {
        const hashedPass = await EncryptionPass.encryptPassword(this.get('password'));
        this.set('password',hashedPass);
    }
    done();
})

export const User = mongoose.model<UserDoc,userModel>('User', userSchema);



 


