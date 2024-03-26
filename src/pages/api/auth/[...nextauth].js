import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: 'ed4ffaca1e79e61de17c',
      clientSecret: 'e88f06fe36618dd2329a8322f67f07ee282426ec',
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)