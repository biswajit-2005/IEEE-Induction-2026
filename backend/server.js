const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes/student_routes");
dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api", router);

//health check
app.get("/", (req, res) => res.send("Server is running"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
