"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ListItem(props) {
  const { _id, title, content, author, like } = JSON.parse(props.data);
  const session = useSession();

  // states
  const [likeCnt, setLikeCnt] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // useEffect
  useEffect(() => {
    setLikeCnt(isLiked ? likeCnt + 1 : likeCnt - 1);
  }, [isLiked]);

  useEffect(() => {
    setLikeCnt(like);
  }, [])

  // onclick
  const onClick = (e) => {
    fetch('/api/deletePost?id=' + _id, {
      method: 'DELETE',
      cache: 'force-cache',
    })
      .then(() => {
        e.target.parentElement.style.opacity = 0;

        setTimeout(() => {
          e.target.parentElement.style.display = "none";
        }, 1000);
      });
  }

  return (
    <div className="list-item" key={_id}>
      <Link href={"/detail/" + _id}>
        <h4>{title}</h4>
      </Link>
      <p>{content}</p>
      { session.data?.user.email === author ? <p className="list-del-btn" onClick={onClick}>del</p> : null }
      <p onClick={() => {
        setIsLiked(!isLiked);
        axios.put(`/api/like?postId=${_id}&isLiked=${!isLiked}`);
      }}>👍</p>
      <p>{likeCnt}</p>
    </div>
  );
}
