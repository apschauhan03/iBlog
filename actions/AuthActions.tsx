"use server"

// prisma db
import prisma from "@/prisma/base";

// hashing with salting A tier
import bcrypt from 'bcrypt';
const saltRounds = 10;


interface userType {
    data: {
        name: string;
        email: string;
        password: string;
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
        if(existingUser)
        {
            return {
                message:"email already exist"
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
        let newUser:userType = {
            data: {
                name: name,
                email: email,
                password: hash,
                posts: {}
            }
        }
            await prisma.iBlogUsers.create(newUser)

    });


    
    return  {message: "Account Created Successfully"}
    

}

export const LoginAction = async (prevState: any, formData: FormData) => {
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    if (email == undefined || password == undefined) {
        return {
            message: "Please enter the correct credentials"
        }
    }

    const user = await prisma.iBlogUsers.findFirst({
        where: {
            email: email,
        },
    })

    if(!user)
    {
        console.log("Username not found");
        return {
            message:"Username or password is incorrect"
        }
    }
    const hashedPassword: string = user.password;
    const result = await bcrypt.compare(password, hashedPassword);

    if(!result) {
        console.log("Password not matched");
        return {
            message:"Username or password is incorrect"
        }
    }


    console.log("User is authenticated");



}