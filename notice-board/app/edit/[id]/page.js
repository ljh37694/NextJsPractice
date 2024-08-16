import { connectDB } from "../../api/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const client = await connectDB;
  const db = client.db('NextForum');

  const data = await db.collection('posts').findOne({ _id: new ObjectId(props.params.id)});

  return (
    <div>
      <form name="form" action={`/api/edit?id=${props.params.id}`} method="POST">
        <input type="text" name="title" defaultValue={data.title} />
        <textarea name="content" defaultValue={data.content}></textarea>
        <button type="submit">수정하기</button>
      </form>
    </div>
  )
}