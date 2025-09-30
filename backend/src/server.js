import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import panelRoutes from "./routes/panelRoute.js";
import { connectDB } from "./config/db.js";
import { getLocation } from "./config/geoapi.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// test route
app.use("/api/panel", panelRoutes);
app.listen(PORT, () => {
  console.log("server started on PORT :", PORT);
  connectDB();
});
