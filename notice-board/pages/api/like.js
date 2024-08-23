import { ObjectId } from "mongodb";
import { connectDB } from "../../app/api/database";

export default async function handler(req, res) {
  try {
    const client = await connectDB;
    const db = client.db("NextForum");

    if (req.method === "PUT") {
      const { postId, isLiked } = req.query;

      const result = await db.collection("posts").updateOne(
        {
          _id: ObjectId(postId),
        },
        {
          $inc: {
            like: (isLiked == "true" ? 1 : -1),
          }
        }
      );

      res.status(200).json(result);
    }
  } catch (e) {
    res.status(200).json(e);
  }
}
