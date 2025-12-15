import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import utilRoutes from "./routes/utils.route.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/utils", utilRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `Utils service is running on http://localhost:${process.env.PORT}`
  );
});
