// Step 1 import ....
const express = require("express");
const app = express();
const morgan = require("morgan");
const { readdirSync } = require("fs");
const cors = require("cors");
// routes require normally
// const authRouter = require("./routes/auth.js");
// const categoryRouter = require("./routes/category.js");

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes require normally
// app.use("/api", authRouter);
// app.use("/api", categoryRouter);
readdirSync("./routes").map((item) =>
  app.use("/api", require("./routes/" + item))
);

// Step 3 Router
// app.post("/api", (req, res) => {
//   const { username, password } = req.body;
//   console.log(username, password);
//   res.json("successful");
// });

// Step 2 start server
app.listen(5000, () => console.log("Server is running on port 5000"));
