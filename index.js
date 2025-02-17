const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
    res.send("Hello, World");
});
app.get("/hello", (req, res) => {
    res.send({"name":"abhishek"});
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
