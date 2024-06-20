"use server"
export async function SignUpAction(prevState: any, formData: FormData) {
    // console.log(formData);

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const RePassword = formData.get("RePassword")?.toString();

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


    console.log('====================================');
    console.log(name,email,password,RePassword);
    console.log('====================================');
    return {
        message: "Account Created Successfully"
    }

}