const express = require("express");
const app = express();
let port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}
);

// handling response
// app.use((req, res) => {
// res.send("Hi I am nand kumar sahu");
// you can send any number, boolean, string, array,obj,html;
// res.send({ name: "nand", branch: "cse", rollno: 195 });
// res.send("<h1>nand kumar sahu</h1><ul>fruits</ul>");
//   let htmlfile = '<h1>nand kumar </h1>';
//   res.send(htmlfile);
// })

// Routing handling;
// app.get("/", (req, res) => {
//   res.send("This is default routing");
// });

// app.get("/phone", (req, res) => {
//   res.send("This is specific phone routing (page)");
// });

// app.get("*", (req, res) => {
//   res.send("If no specific routing is available, then show this");
// });


// path paramaters
// app.get("/user/:id", (req, res) => {
//   let id = req.params.id;
//   res.send(`User id is ${id}`);

// });

// app.get("/user/:id", (req, res) => {
//   let id = req.params.id;
//   res.json({
//     message: `User id is ${id}`,
//     params: req.params
//   });
// });

// querry string
app.get("/search", (req, res) => {
  // console.log(req.query);
  let { q } = req.query;
  if (!q) {
    res.send("Please enter search query");
  }
  res.send(`<h1>your search result</h1>:${q}</h1>`);
})
