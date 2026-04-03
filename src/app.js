import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";

import router from "./routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

https
  .createServer(
    {
      cert: fs.readFileSync("src/SSL/code.crt"),
      key: fs.readFileSync("src/SSL/code.key"),
    },
    app,
  )
  .listen(3001, () => {
    console.log("Server is running on https://localhost:3001");
  });
