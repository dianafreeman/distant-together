import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
// import * as debug from 'debug'
import dotenv from "dotenv";
import http from "http";
import normalizePort from "./utils/normalizePort";
import resourcesRouter from "./routes/resources";

dotenv.config();

const app = express();
const port = normalizePort(process.env.PORT || "3001");
app.set("port", port);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve("../client/public/index.html")));

// app.use("/", indexRouter);
app.use("/api/resources", resourcesRouter);
app.get("/", (req, res) => {
  res.sendFile(path.resolve("../public/index.html"));
});

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});

server.on("error", err => {
  console.error(err);
});

export default app;
