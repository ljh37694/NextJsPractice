'use client'

// error.js는 'use client'만 가능
// page.js에서 에러나면 보여줌
export default function Error({error, reset}){
  return (
    <div>
      <h4>오 이런 에러남</h4>
      <button onClick={()=>{ reset() }}>다시시도</button>
    </div>
  );
}