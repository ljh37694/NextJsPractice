import { ObjectId } from "mongodb";
import { connectDB } from "../../app/api/database";

export default async function hander(req, res) {
  try {
    const client = await connectDB;
    const db = client.db("NextForum");

    const result = await db.collection('posts').deleteOne({
      _id: new ObjectId(req.query.id),
    });

    res.status(200).json(result);
  } catch (e) {
    res.status(e).json(e);
  }
}