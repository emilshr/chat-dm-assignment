import express from "express";
import { Server } from "socket.io";
import http from "http";
import { connectToDatabase } from "./config/db";
import { authRouter } from "./routers/auth.router";
import { inboxRouter } from "./routers/inbox.router";

const app = express();
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.send({ message: "OK" });
});

io.on("connection", (socket) => {
  console.log("User connected", socket.client.request.headers.origin);
});

const { PORT = 3000 } = process.env;

app.use("/auth", authRouter);
app.use("/inbox", inboxRouter);

(async () => {
  await connectToDatabase();
  server.listen(PORT, () => {
    console.debug(`Server listening at PORT: ${PORT}`);
  });
})();
