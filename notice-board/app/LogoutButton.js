'use client'

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button onClick={signOut} className="default-btn" style={{ backgroundColor: "#eee", color: 'blue'}}>로그아웃</button>
  );
}