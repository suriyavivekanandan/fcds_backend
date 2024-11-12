import dotenv from "dotenv";
import ConnectDB from "./db/index.js";
import {app} from "./app.js"
dotenv.config({
  path: "./env",
});

const PORT=5000
ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️  Server is running at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongodb error: ", err);
  });
