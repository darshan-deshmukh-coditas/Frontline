import express from "express";
import { connectToPG } from "./connections/pg.connection.js";
import { registeredMiddlewares } from "./routes/routes.js";
import { env } from "../validate.env.js";
// import { createServer } from "node:http";
// import { Server } from "socket.io";
export const startServer = async () => {
  try {
    const app = express();
    // const server = createServer();
    // const io = new Server(server, {
    //   cors: { origin: "*", methods: ["GET", "POST"] },
    // });
    await connectToPG();
    registeredMiddlewares(app);
    const PORT = env.PORT;
    // io.on("connection", (socket) => {
    //   console.log("A user connected");
    // });
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
    process.nextTick(() => process.exit(1));
  }
};
