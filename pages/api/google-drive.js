import { google } from "googleapis";
import auth from "../../helpers/googleDrive";

export default async function handler(req, res) {
  
  const drive = google.drive({ version: "v3", auth });

  try {
  
    const folderId = "17A-A7w8ZRZugp8A8K2p2ISfTNBh5a4ED";
    // List files inside the specified folder
    const driveResponse = await drive.files.list({
      q: `'${folderId}' in parents`,
    });
    const files = driveResponse.data.files;
    res.status(200).json({ files });

  } catch (error) {

    console.error("Error fetching files:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  
  }
}
