import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import initRoutes from "./src/routes";

import cors from "cors";

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);
// app.use("/", (req, res) => {
//   res.send("server on...");
// });

const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
