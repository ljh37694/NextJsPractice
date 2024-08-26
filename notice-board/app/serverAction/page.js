import { revalidatePath } from "next/cache";
import { connectDB } from "../api/database";

export default async function serverAction() {
  const client = await connectDB;
  const db = client.db('NextForum');

  const testList = await db.collection('test').find().toArray();

  async function handleSubmit(formData) {
    'use server';

    const client = await connectDB;
    const db = client.db('NextForum');

    const result = await db.collection('test').insertOne({
      title: formData.get('title'),
    });

    console.log(formData);

    revalidatePath('/serverAction');
  }

  return (
    <div>
      <form action={handleSubmit}>
        <input name="title" />
        <button type="submit">보내기</button>
      </form>

      <div>
        {testList.map((item) => {
          return (
            <p>{item.title}</p>
          );
        })}
      </div>
    </div>
  );
}