import { connectDB } from "../api/database";
import ListItem from "./ListItem";

export const dynamic = 'force-dynamic'; // dynamic rendering으로 변경, static rendering으로 바꾸려면 'force-static'
export const revaildate = 60; // 60초 동안 caching

export default async function List() {
  const client = await connectDB;
  const db = client.db("NextForum");
  const result = await db.collection("posts").find().toArray();

  return (
    <div className="list-bg">
      {result.map((item) => {
        return <ListItem data={JSON.stringify(item)} />
      })}
    </div>
  );
}
