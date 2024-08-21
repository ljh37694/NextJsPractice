export default function Register() {
  return (
    <div>
      <form name="registerForm" method="POST" action="/api/auth/signUp">
        <input type="text" name="name" placeholder="닉네임을 입력하세요" />
        <input type="email" name="email" placeholder="이메일을 입력하세요" />
        <input type="password" name="password" placeholder="비밀번호를 입력하세요" />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}