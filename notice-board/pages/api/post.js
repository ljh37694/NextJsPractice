import { connectDB } from "../../app/api/database";

export default async function handler(req, res) {
  try {
    const client = await connectDB;
    const db = client.db("NextForum");

    const data = JSON.parse(req.body);

    switch (req.method) {
      case "GET":
        break;
      case "POST":
        const result = await db.collection('posts').insertOne({
          title: data.title,
          content: data.content,
        });
    
        res.status(200).json(result);

        break;
      default:
        res.send("hi");
        break;
    }

    console.log(result);
  } catch (e) {
    res.status(500).json(e);
  }
}