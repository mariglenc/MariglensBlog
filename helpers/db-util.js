import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

// const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.ntrwp.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://mariglen:Mar1Glen..@cluster0.pl2rlaa.mongodb.net/glensBlog?retryWrites=true&w=majority"
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  await db.collection(collection).insertOne(document);
  return db;
}

export async function getAllDocuments(client, collection, sort = { _id: -1 }) {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();
  const serializedDocuments = documents.map((doc) => {
    const { _id, ...rest } = doc;
    return { _id: _id.toString(), ...rest };
  });

  return serializedDocuments;
}

export async function getDocumentById(client, collection, id) {
  const db = client.db();
  try {
    const document = await db
      .collection(collection)
      .findOne({ _id: new ObjectId(id) });

    if (!document) {
      return null;
    }

    const { _id, ...rest } = document;
    return { _id: _id.toString(), ...rest };
  } catch (error) {
    console.error("Error fetching document by ID:", error);
    throw error;
  }
}

export async function deleteDocumentById(client, collection, id) {z
  const db = client.db();
  try {
    const result = await db.collection(collection).deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      console.log("Document not found for deletion");
      return false;
    }

    console.log("Document deleted successfully");
    return true;
  } catch (error) {
    console.error("Error deleting document by ID:", error);
    throw error;
  }
}
