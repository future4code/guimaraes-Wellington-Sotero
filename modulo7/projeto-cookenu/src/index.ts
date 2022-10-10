import dotenv from "dotenv"
import { AddressInfo } from "net"
import express from "express"
import cors from "cors"
import { Request, Response} from "express"
import { signupEP } from "./endpoints/signup"
import { loginEP } from "./endpoints/login"
import { getOwnProfileEP } from "./endpoints/getOwnProfile"
import { getProfileByIdEP } from "./endpoints/getProfileById"
import { createRecipeEP } from "./endpoints/createRecipe"
import { getRecipeEP } from "./endpoints/getRecipe"
import { followUserEP } from "./endpoints/followUser"
import { unfollowUserEP } from "./endpoints/unfollowUser"
import { getRecipeFeedEP } from "./endpoints/getRecipeFeed"
import { deleteUserAccountEP } from "./endpoints/deleteUserAccount"
import { editeRecipeEP } from "./endpoints/editRecipe"
import { deleteRecipeEP } from "./endpoints/deleteRecipe"

dotenv.config()
const app = express()
app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})

//User Endpoints
app.post("/signup", signupEP)
app.post('/login', loginEP)

app.get('/user/profile', getOwnProfileEP)
app.get('/user/feed', getRecipeFeedEP)
app.get('/user/:id', getProfileByIdEP)

app.delete('/user/:id', deleteUserAccountEP) 


//Recipes Endpoints
app.post('/recipe', createRecipeEP)

app.get('/recipe/:id', getRecipeEP)

app.put('/recipe/:id', editeRecipeEP) 

app.delete('/recipe/:id', deleteRecipeEP)

//UserConnections
app.post('/user/follow', followUserEP)
app.post('/user/unfollow', unfollowUserEP)