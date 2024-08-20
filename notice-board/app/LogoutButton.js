'use client'

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button onClick={signOut} className="default-btn" color="#eee">로그아웃</button>
  );
}