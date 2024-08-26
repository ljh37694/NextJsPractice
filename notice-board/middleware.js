import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const curUrl = req.nextUrl.pathname;

  // test
  if (curUrl.startsWith('/list')) {
    console.log(req.headers.get('sec-ch-ua-platform'));

    return NextResponse.next();
  } 
  
  // 로그인한 상태일 때만 글쓰기 페이지에 접속할 수 있고, 아니면 로그인 페이지로 이동
  else if (curUrl.startsWith('/write')) {
    const session = await getToken({ req: req });

    console.log(session);

    if (session === null) {
      return NextResponse.redirect(new URL('/api/auth/signin', req.url));
    }
  } 
  
  // 방문한 적 있는지 체크
  else if (curUrl.startsWith('/register')) {
    const response = NextResponse.next();

    const cookie = req.cookies.get('visited');

    if (cookie && cookie.value === 'false') {
      response.cookies.set({
        name: 'visited',
        value: true,
        maxAge: 3600,
        httpOnly: true,
      });
    }

    return response;
  }
}