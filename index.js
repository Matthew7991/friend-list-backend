import "dotenv/config"
import express from "express"
import cors from "cors"
import multer from "multer"

import {
  addFriend,
  getFriendByIndex,
  getFriends,
} from "./controller/friendsHandler.js"

const port = process.env.PORT
const friendsApiUrl = "/api/friends"

const server = express()
const upload = multer()

server.use(cors())
server.use(express.json())

server.get(friendsApiUrl, getFriends)
server.get(friendsApiUrl + "/:id", getFriendByIndex)
server.post(friendsApiUrl, upload.none(), addFriend)

server.listen(port, () => console.log("Server running on Port", port))
