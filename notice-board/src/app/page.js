import { connectDB } from "./database";

export default async function Home() {
  let client = await connectDB;
  const db = client.db('NextForum');
  let result = await db.collection('posts').find().toArray();

  return (
    <div>
      { result[0].title }
    </div>
  );
}
