import { ObjectId } from "mongodb";
import { connectDB } from "../../app/api/database";

export default async function handler(req, res) {
  try {
    const client = await connectDB;
    const db = client.db("NextForum");

    if (req.method == "POST") {
      const result = await db.collection('posts').updateOne({ _id: new ObjectId(req.query.id) }, {
        $set: {
          title: req.body.title,
          content: req.body.content,
        }
      });

      res.status(200).redirect('/list').json(result);
    }
  } catch (e) {
    res.status(500).json(e);
  }
}