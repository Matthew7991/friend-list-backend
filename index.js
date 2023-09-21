import express from "express"
import cors from "cors"
import multer from "multer"
import "dotenv/config"

import { readFile } from "fs/promises"

import {
  addFriend,
  getFriendByIndex,
  getFriends,
} from "./controller/friendsHandler.js"

const port = process.env.PORT
const friendsApiUrl = "/api/friends"
// export const friendsDataUrl = "./data/data.json"

// export const friends = JSON.parse(await readFile(friendsDataUrl, "utf8"))

const server = express()
const upload = multer({ dest: "uploads/" })

server.use(cors())
server.use(express.json())

server.get(friendsApiUrl, getFriends)
server.get(friendsApiUrl + "/:id", getFriendByIndex)
server.post(friendsApiUrl, upload.none(), addFriend)

server.listen(port, () => console.log("Server running on Port", port))
