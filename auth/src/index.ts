import express from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello from auth service");
});

app.listen(PORT, () => {
  console.log(`Auth service is running on port ${PORT}`);
});