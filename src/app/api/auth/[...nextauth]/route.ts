import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify"
import {refreshAccessToken} from "spotify-web-api-node/src/server-methods";
import {LOGIN_URL} from "../../../../../lib/spotify";

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    // Configure one or more authentication providers
    providers: [
        SpotifyProvider({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
            authorization: LOGIN_URL,
        }),
        // ...add more providers here
    ],
    callbacks: {
        async jwt({token, user, account}) {
            // Initialize sign in
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: account.expires_at * 1000
                }
            }

            // Refresh the token
            if (Date.now() < token.accessTokenExpires) {
                return token;
            }

            // Access token instead has expired
            return refreshAccessToken(token);
        },

        async session({session, token}) {
            session.user.accessToken = token.accessToken;
            session.user.refreshToken = token.refreshToken;
            session.user.username = token.username;

            return session;
        }
    }
})

export { handler as GET, handler as POST }