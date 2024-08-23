"use client";

// 최상위 layout.js가 에러가 발생했을 때 보여주는 error.js

export default function GlobalError({ error, reset }) {
  return (
    <div>
      <h4>에러남</h4>
      <button className="default-btn" onClick={() => reset()}>다시 시도</button>
    </div>
  );
}
