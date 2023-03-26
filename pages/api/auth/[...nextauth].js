import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async signIn(user, account, profile) {
            if (account.provider === "google" && profile.verified_email === true) {
                return true;
            }

            return false;
        },
    },
});