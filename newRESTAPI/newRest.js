const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const { v4: uuidv4 } = require("uuid");
//data
app.set("view engine", "ejs");

let posts = [
  {
    id: uuidv4(), //id ni jagya ae aa call karvanu 6e.
    username: "lifetime1",
    content: "i am react devloper",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnokwNdXdIulaP2AUwAIIXOLx4L8yM1kB4g&s",
    timestamp: "",
  },
  {
    id: uuidv4(),
    username: "lifetime2",
    content: "i am typescript devloper",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnokwNdXdIulaP2AUwAIIXOLx4L8yM1kB4g&s",
    timestamp: "",
  },
  {
    id: uuidv4(),
    username: "lifetime3",
    content: "i am nodejs devloper",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnokwNdXdIulaP2AUwAIIXOLx4L8yM1kB4g&s",
    timestamp: "",
  },
  {
    id: uuidv4(),
    username: "lifetime4",
    content: "i am mern stack devloper",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnokwNdXdIulaP2AUwAIIXOLx4L8yM1kB4g&s",
    timestamp: "",
  },
];

//get request
app.get("/posts", (req, resp) => {
  //   resp.send("df");
  resp.render("index.ejs", { posts });
});
app.get("/posts/new", (req, resp) => {
  resp.render("new.ejs", { posts });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
