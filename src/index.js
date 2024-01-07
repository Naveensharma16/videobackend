import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(
    app.on("error", (error) => {
      connsole.log("DB error");
      throw Error(error);
    }),

    app.listen(process.env.PORT || 8000, () => {
      console.log(`listining on port: ${process.env.PORT}`);
    })
  )
  .catch((error) => {
    console.log("mongodb connection error", error);
  });
