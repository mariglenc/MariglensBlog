import { connectDatabase, getDocumentById } from "@/helpers/db-util";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const postId = req.query.id;

  if (!postId) {
    return res.status(400).json({ error: "Post ID is required" });
  }

  let client;
  try {
    client = await connectDatabase();
  } catch (connectionError) {
    console.error("MongoDB Connection Error:", connectionError);
    return res.status(500).json({ error: "MongoDB Connection Error" });
  }

  try {
    const post = await getDocumentById(client, "blogs", postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json({ post });
  } catch (fetchError) {
    console.error("Error fetching post:", fetchError);
    return res.status(500).json({ error: "Error fetching post" });
  } finally {
    client.close();
  }
}
