import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session,accessToken } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        Access Token: {session.accessToken} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn('github',{callbackUrl:"https://page-routing.vercel.app"})}>GitHub Sign in</button>
      <button onClick={() => signIn('google',{callbackUrl:"https://page-routing.vercel.app"})}>google Sign in</button>

    </>
  );
}
