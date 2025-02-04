import { compare, hash } from "bcrypt";


export class EncryptionPass {
     static async encryptPassword(password:string) {
        return await hash(password,8)
    }

    static async decryptPassword (plainPassword:string,hashedPass:string) {
        return await compare(plainPassword,hashedPass)
    }
}