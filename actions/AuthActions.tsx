"use server"

import { signIn } from "@/auth";
import prisma from "@/prisma/base";
const bcrypt = require('bcryptjs');

import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";

const saltRounds = 10;


interface userType {
    data: {
        name: string;
        email: string;
        password: string;
        // image: string;
        posts: {}
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

    const existingUser = await prisma.iBlogUsers.findFirst({
        where: { email: email }
    });

    console.log(existingUser);
    if (existingUser) {
        return {
            message: "email already exist"
        };
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
                posts: {},
                // image: ""
            }
        }
        await prisma.iBlogUsers.create(newUser)

    });



    return { message: "Account Created Successfully" }


}

export const LoginAction = async (prevState: any, formData: FormData) => {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    if (!email || !password ) {
        return {
            message: "Please enter the correct credentials"
        }
    }

    const user = await prisma.iBlogUsers.findFirst({
        where: {
            email: email,
        },
    })

    if (!user||!user.password) {
        console.log("Username not found");
        return {
            message: "Username or password is incorrect"
        }
    }
    const hashedPassword: string = user.password;
    const result = await bcrypt.compare(password, hashedPassword);

    if (!result) {
        console.log("Password not matched");
        return {
            message: "Username or password is incorrect"
        }
    }


    try {
        await signIn("credentials", {
            redirect: false,
            callbackUrl: "/",
            email,
            password
        })

    }
    catch (error) {
        const loginError = error as CredentialsSignin;
        return loginError;
    }
    redirect("/");

}


export const loginWithGit = async () => {
    "use server"
    await signIn("github", { redirectTo: "/" });
}

export const loginWithGoogle = async () => {
    "use server"

    await signIn("google", { redirectTo: "/" });
}
