import NextAuth, { CredentialsSignin } from "next-auth";
import bcrypt from "bcrypt";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import prisma from "./prisma/base";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "credentialsProvider",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin("Please enter password and email");
        }
        const user = await prisma.iBlogUsers.findFirst({
          where: {
            email: email,
          },
        });

        if (!user||!user.password) {
          throw new CredentialsSignin(
            "Provided email or password is incorrect"
          );
        }
        const isMatched = await bcrypt.compare(password, user.password);

        if (!isMatched) {
          throw new CredentialsSignin(
            "Provided email or password is incorrect"
          );
        }

        const userData = {
          name: user.name,
          email: user.email,
          id: user.id,
        };
        return userData; // returning to the cookie
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {

      if(token.sub)
        session.user.id = token.sub;
      return session;
    },
    signIn: async ({ user, account }) => {
      if (account?.provider === "google"||account?.provider==="github") {
          const { email, name, image } = user;
          const existingUser = await prisma.iBlogUsers.findFirst({
            where: { email: email as string },
          });
          if (!existingUser) {
            let newUser: any = {
              data: {
                name: name,
                email: email,
                image:image,
                posts: {},
              },
            };
            try
            {
              const data = await prisma.iBlogUsers.create(newUser);
              user.id = data.id;
              return true;
            }
            catch(err)
            {
              return false;
            }
          } else {
            user.id = existingUser?.id;
            return true;
          }
      }
      if(account?.provider === "credentials")
            return true;
      else
        return false;
    },

  },
});
