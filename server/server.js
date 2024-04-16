const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
    console.log("app is running at http://localhost:3000");
});