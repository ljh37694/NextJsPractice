import { connectDB } from "./api/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db('NextForum');
  let result = await db.collection('posts').find().toArray();

  return (
    <div>
      { result[0].title }
    </div>
  );
}
