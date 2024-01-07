import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// TODO: read about this documentation
// allowing the json data with the limit of 16kb
app.use(express.json({ limit: "16kb" }));
// allowing the data from url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// allowing stati file
app.use(express.static("public"));
app.use(cookieParser());

export default app;
