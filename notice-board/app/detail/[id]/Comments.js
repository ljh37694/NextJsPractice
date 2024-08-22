"use client";

import axios from "axios";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Comments(props) {
  const [comment, setComment] = useState('');
  const session = useSession();

  const { postId } = props;

  console.log(props);

  return (
    <div>
      <h4>댓글</h4>
      <div></div>
      <input onChange={(e) => setComment(e.target.value)} />
      <button onClick={() => {
        axios.post('/api/comment', {
          content: comment,
          author: session.data.user.email,
          post_id: postId,
        })
        .then(res => console.log(res.data))
        .catch(e => console.log(e));
      }}>보내기</button>
    </div>
  );
}
