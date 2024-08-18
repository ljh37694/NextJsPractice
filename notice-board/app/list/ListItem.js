"use client";

import Link from "next/link";

export default function ListItem(props) {
  const { _id, title, content } = JSON.parse(props.data);

  const onClick = () => {
    fetch('/api/deletePost?id=' + _id, {
      method: 'GET',
    });
  }

  return (
    <div className="list-item" key={_id}>
      <Link href={"/detail/" + _id}>
        <h4>{title}</h4>
      </Link>
      <p>{content}</p>
      <p className="list-del-btn" onClick={onClick}>del</p>
    </div>
  );
}
