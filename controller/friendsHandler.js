import { getDb } from "../utilities/db.js"
import { ObjectId } from "mongodb"

export async function getFriends(_, res) {
  const db = await getDb()
  const result = await db.collection("contacts").find().toArray()
  res.json(result)
}

export async function getFriendByIndex(req, res) {
  const id = req.params.id
  const db = await getDb()
  const result = await db
    .collection("contacts")
    .findOne({ _id: new ObjectId(id) })

  // const friend = friends[id]
  res.json(result)
}

export async function addFriend(req, res) {
  const friend = req.body

  friend.verdienst = Number(friend.verdienst)
  friend.selfemployed = friend.selfemployed === "true" ? true : false
  friend.workedwith = friend.workedwith === "true" ? true : false

  const db = await getDb()
  const result = await db.collection("contacts").insertOne(friend)

  // friends.push(friend)
  // await writeFile(friendsDataUrl, JSON.stringify(friends, null, 2))
  res.end()
}
