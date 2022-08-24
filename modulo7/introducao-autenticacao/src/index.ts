import app from "./controller/app"
import { userRouter } from "./controller/userRouter"
import { v4 } from "uuid";

app.use('/user/', userRouter)

export function generateId(): string {
    return v4();
  }