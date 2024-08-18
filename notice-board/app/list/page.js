import { connectDB } from "../api/database";
import ListItem from "./ListItem";

export default async function List() {
  const client = await connectDB;
  const db = client.db("NextForum");
  let result = await db.collection("posts").find().toArray();

  return (
    <div className="list-bg">
      {result.map((item) => {
        return <ListItem data={JSON.stringify(item)} />
      })}
    </div>
  );
}
