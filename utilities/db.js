import { MongoClient } from "mongodb"

const url = process.env.MONGO_URL
const database = process.env.MONGO_DB

const client = new MongoClient(url)

let db

export async function getDb() {
  if (db) return db
  await client.connect()
  db = client.db(database)
  return db
}
