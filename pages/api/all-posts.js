import { connectDatabase, getAllDocuments } from "@/helpers/db-util";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  let client;
  try {
    client = await connectDatabase();
  } catch (connectionError) {
    console.error("MongoDB Connection Error:", connectionError);
    return res.status(500).json({ error: "Internal Server Error" });
  }

  try {
    const allPosts = await getAllDocuments(client, "blogs");
    if (!allPosts) {
      return res.status(404).json({ error: "No posts found" });
    }
    res.status(200).json({ posts: allPosts });
  } catch (fetchError) {
    console.error("Error fetching posts:", fetchError);
    return res.status(500).json({ error: "Internal Server Error" });
  } finally {
    client.close();
  }
}
