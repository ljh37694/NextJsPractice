import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import LoginButton from "./LoginButton";
import { getServerSession } from "next-auth";
import LogoutButton from "./LogoutButton";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { cookies } from "next/headers";
import ThemeButton from "./ThemeButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  const theme = cookies().get('theme');

  return (
    <html lang="en">
      <body className={
        theme != undefined && theme.value == 'dark' ? 'dark-theme' : ''
      }>
        <nav id="top-nav">
          <p>Forum</p>
          <Link href="/">Home</Link>
          <Link href="/list">List</Link>
          <Link href="/write">Write</Link>
          <Link href="/register">SignUp</Link>
          { session ? <LogoutButton /> : <LoginButton /> }
          <ThemeButton />
        </nav>
        {children}
      </body>
    </html>
  );
}
