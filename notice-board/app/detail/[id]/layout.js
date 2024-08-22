'use client'

import { SessionProvider } from "next-auth/react"

export default function DetailLayout({ children }) {
  return (
    <SessionProvider>{ children }</SessionProvider>
  )
}