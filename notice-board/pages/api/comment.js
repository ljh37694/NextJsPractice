import { connectDB } from "../../app/api/database";

export default async function handler(req, res) {
  try {
    const client = await connectDB;
    const db = client.db('NextForum');

    if (req.method === "POST") {
      const { content, author, post_id } = req.body;
      const result = await db.collection('comments').insertOne({
        content,
        author,
        post_id,
      });

      res.statsu(200).json(result);
    }
  } catch (e) {
    res.status(200).json(e);
    console.log(e);
  }
}