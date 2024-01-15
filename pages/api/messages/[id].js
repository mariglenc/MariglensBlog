import { connectDatabase, deleteDocumentById } from "@/helpers/db-util";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }
  let client;
  try {
    client = await connectDatabase();
  } catch (connectionError) {
    console.error("MongoDB Connection Error:", connectionError);
    return res.status(500).json({ error: "Internal Server Error zzzzzzzzzzzz" });
  }

  try {
    const deletionResult = await deleteDocumentById(
      client,
      "messages",
      id
    );

    if (!deletionResult) {
      return res.status(404).json({ error: "Document not found" });
    }

    return res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    console.error("Delete Document Error:", error);
    return res.status(500).json({ error: "Internal Server Error wwwwwwwwwww" });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
