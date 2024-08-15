import { ObjectId } from "mongodb";
import { connectDB } from "../../api/database";

export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db('NextForum');
  let result = await db.collection('posts').findOne({ _id: new ObjectId(props.params.id)});

  console.log(props);

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}