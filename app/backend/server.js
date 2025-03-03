const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("api/message", (req, res) => {
    res.json({ message: "Test Automation Portfolio is running" });
});

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));