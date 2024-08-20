'use client'

import { signIn } from 'next-auth/react';

export default function LoginButton() {
  return (
    <button onClick={signIn} className='default-btn'>로그인</button>
  );
}