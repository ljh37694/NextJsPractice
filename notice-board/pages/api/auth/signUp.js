import { connectDB } from "../../../app/api/database";
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const client = await connectDB;
      const db = client.db("NextForum");
  
      const { email, password, name } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const result = await db.collection('user_info').insertOne({
        email,
        password: hashedPassword,
        name,
      });
  
      res.status(200).json(result);
    }
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}