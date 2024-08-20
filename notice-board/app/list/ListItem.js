"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ListItem(props) {
  const { _id, title, content, author } = JSON.parse(props.data);
  const session = useSession();

  console.log(session);

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
    </div>
  );
}
