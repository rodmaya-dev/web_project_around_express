import express from "express";
import mongoose from "mongoose";
import mainRouter from "./routes/index.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/aroundb") // aroundb es la base de datos que usaremos
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: "6a978d9fa596bce180508f74",
  };
  next();
});

app.use(mainRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});