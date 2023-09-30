const express = require("express");
const app = express();
const path = require("path");
const port = 8090;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ats/:userId", (req, res) => {
    let { userId } = req.params;
    const alumniData = require("./data.json");
    const data = alumniData[userId];
    if (data) {
        res.render("alumni.ejs", { data });
    } else {
        res.render("error.ejs");
    }
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})