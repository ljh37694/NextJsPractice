"use client";

import { useRouter } from "next/navigation";

export default function Write() {
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();

    const form = document.postForm;

    console.log(form.title.value, form.content.value)

    fetch("/api/post", { method: "POST", body: JSON.stringify({
      title: form.title.value,
      content: form.content.value,
    })});

    router.push("/list");
  };

  return (
    <div>
      <h4>글 작성</h4>
      <form name="postForm" onSubmit={onSubmit}>
        <input placeholder="제목을 입력하세요" type="text" name="title" />
        <textarea placeholder="내용 입력하세요" name="content"></textarea>
        <button type="submit">보내기</button>
      </form>
    </div>
  );
}
