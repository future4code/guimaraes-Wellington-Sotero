import { app } from "./app";
import { userRouter } from "../src/routes/userRouter";
import { movieRouter } from "../src/routes/movieRouter";

app.use("/user", userRouter);

app.use("/movie", movieRouter);