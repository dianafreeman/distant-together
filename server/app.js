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
app.use(express.static(path.resolve(__dirname, "../build")));

// app.use("/", indexRouter);
app.use("/api/resources", resourcesRouter);
app.get("*", (req, res) => {
  console.log("LOGGING PATH");
  console.log(path.resolve(__dirname, "../build"));
  res.sendFile(path.resolve(__dirname, "../build"));
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
server.on("error", err => {
  console.error(err);
});

export default app;
