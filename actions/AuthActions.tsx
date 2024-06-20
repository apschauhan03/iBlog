"use server"

// prisma db
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// hashing with salting A tier
const bcrypt = require('bcrypt');
const saltRounds = 10;


interface userType {
    data: {
        name: string;
        email: string;
        password: string;
        posts:{}
    }
}
export async function SignUpAction(prevState: any, formData: FormData) {
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const RePassword = formData.get("RePassword")?.toString();

    if (!email || !name || !password) {
        return {
            message: "Please provide valid credentials"
        }
    }


    if (name?.length === 0)
        return {
            message: "Please enter your name"
        }
    if (email !== undefined && !email?.includes('@'))
        return {
            message: "Please enter a valid email"
        }
    if (password !== undefined && password.trim().length < 8)
        return {
            message: "Please enter a password length >= 8"
        }
    if (password !== RePassword)
        return {
            message: "Passwords are not matching"
        }


    bcrypt.hash(password, saltRounds, async function (err: any, hash: string) {
        if (err) {
            console.log("error occured while hashing!", err);
            return {
                message: "Password invalid"
            }
        }

        // store into our db
        let newUser: userType = {
            data: {
                name: name,
                email: email,
                password: hash,
                posts:{}
            }
        }
        await prisma.iBlogUsers.create(newUser)
        const allUsers = await prisma.iBlogUsers.findMany();
        console.log(allUsers);
    });
    return {
        message: "Account Created Successfully"
    }

}