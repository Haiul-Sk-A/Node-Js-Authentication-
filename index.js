import express from "express";
import dotenv from "dotenv";
import connectDb from "./DataBase/db.js";
import authRoutes from "./routes/authRoutes.js"
import userRoute from "./routes/userRoutes.js"

dotenv.config();
connectDb()

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use(express.json());

app.use("/user",authRoutes);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
