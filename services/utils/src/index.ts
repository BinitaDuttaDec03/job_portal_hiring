import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import utilRoutes from "./routes/utils.route.js";
import { v2 as cloudinary } from "cloudinary";
import { startSendMailConsumer } from "./consumer.js";

dotenv.config();

startSendMailConsumer();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

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
