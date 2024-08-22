"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function Comments(props) {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const session = useSession();

  const { postId } = props;

  useEffect(() => {
    axios.get('/api/comment?id=' + postId)
      .then(res => {
        setCommentList(res.data);
        console.log(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div>
      <h4>댓글</h4>
      <div>
        {commentList.map((item, idx) => {
          return (
            <p key={idx}>{item.content}</p>
          );
        })}
      </div>
      <input onChange={(e) => setComment(e.target.value)} />
      <button onClick={() => {
        const commentData = {
          content: comment,
          author: session.data.user.email,
          post_id: postId,
        };

        axios.post('/api/comment', commentData)
        .then(res => console.log(res.data))
        .catch(e => console.log(e));

        setCommentList([...commentList, commentData]);
      }}>보내기</button>
    </div>
  );
}
 