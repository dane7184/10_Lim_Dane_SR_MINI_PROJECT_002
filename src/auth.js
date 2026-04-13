import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {loginService} from "./service/auth.service"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    const user = await loginService(credentials);
                    const token = await user.payload.token;
                    if (!token) {
                        return null;
                    }
                    const userData = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/me`, {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    });
                    const currentUser = await userData.json();
                    if (userData.ok && currentUser.payload) {
                        const user = currentUser.payload;
                        return {
                            id: user.userId,
                            email: user.email,
                            fullName: `${user.firstName} ${user.lastName}`,
                            accessToken: token,
                        }
                    }
                    console.log("this is user in auth :", user);
                    return null;
                } catch (error) {
                    console.error("Internal Auth Error:", error);
                    return null;
                }
            },
        }),
    ],
    secret: process.env.BETTER_AUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                return {
                    ...token, ...user
                }
            }
            console.log("this is token :", token);
            return token;
        },
        session: async ({ session, token }) => {
            if (token) {
                session.user = {
                    ...session.user,
                    id: token.id,
                    name: token.fullName,
                    accessToken: token.accessToken,
                    email: token.email,
                }
            }
            console.log("this is session : ", session);
            return session;
        },
    },
});
