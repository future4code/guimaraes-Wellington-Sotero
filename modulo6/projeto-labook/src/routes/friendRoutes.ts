import express from "express";
import { FriendController } from "../Controllers/FriendController";

export const friendRouter = express.Router();

const friendController = new FriendController();

friendRouter.post("/add-friend", friendController.addFriendEndpoint);
friendRouter.post("/undo-friendship", friendController.undoFriendshipEndpoint);