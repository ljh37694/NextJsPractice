import Link from "next/link";
import { connectDB } from "../api/database";

export default async function List() {
  const client = await connectDB;
  const db = client.db("NextForum");
  let result = await db.collection("posts").find().toArray();

  return (
    <div className="list-bg">
      {result.map((item) => {
        return (
          <div className="list-item" key={item._id}>
            <Link href={"/detail/" + item._id}>
              <h4>{item.title}</h4>
            </Link>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
}
