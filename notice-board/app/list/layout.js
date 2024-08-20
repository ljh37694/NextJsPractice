'use client'

import { SessionProvider } from "next-auth/react";

export default function ListLayout({ children }) {
  return (
    <SessionProvider>
      { children }
    </SessionProvider>
  );
}