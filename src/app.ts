import express from "express";
import mongoose from "mongoose";
import mainRouter from "./routes/index.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/aroundb") // aroundb es la base de datos que usaremos
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(mainRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});