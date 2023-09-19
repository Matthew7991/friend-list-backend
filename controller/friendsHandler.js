import { friends, friendsDataUrl } from "../index.js"
import { writeFile } from "fs/promises"

export function getFriends(_, res) {
  res.json(friends)
}

export function getFriendByIndex(req, res) {
  const index = req.params.id
  const friend = friends[index]
  res.json(friend)
}

export async function addFriend(req, res) {
  const friend = req.body
  friend.verdienst = Number(friend.verdienst)
  friend.selfemployed = friend.selfemployed === "true" ? true : false
  friend.workedwith = friend.workedwith === "true" ? true : false

  friends.push(friend)
  await writeFile(friendsDataUrl, JSON.stringify(friends, null, 2))
  res.end()
}
