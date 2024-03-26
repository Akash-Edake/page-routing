import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId:process.env.GITHUB_CLIENT_ID,
      clientSecret:process.env.GITHUB_CLIENT_SECRETE,
    }),
    GoogleProvider({
      clientId:'940419656045-eb35g8dabusnd9moagoa9uovvdd80jpn.apps.googleusercontent.com',
      clientSecret:'be4654f980dc9f0812ff7444e2417ffef7534006'
    })
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  }
}

export default NextAuth(authOptions)