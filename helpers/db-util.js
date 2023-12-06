import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
// const { ObjectId } = require("mongodb");

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