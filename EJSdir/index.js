const expree = require("express");
const app = expree();
const path = require("path");

const port = 8080;
app.use(expree.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
// view directory: for accessing this dir to any where
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
  // res.send("this is home page(default)")
  res.render("home")
});

// routing for rolldice 
app.get("/rolldice", (req, res) => {
  const value = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { num: value });
})

// routing for search usename instagram basic version:
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  // const {flowers}=["nand","aman","milan","mayank"];
  // console.log(username);
  // res.render("ig.ejs",{username,flowers});
  const instdata = require("./data.json");
  const data = instdata[username];
  console.log(data)
  if (data) {
    // res.render("instagram.ejs", { data });
    res.send(data);
  }
  else {
    res.render("error.ejs");
  }

});
// concection to server
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
});
