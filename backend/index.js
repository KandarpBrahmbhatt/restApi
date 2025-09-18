import express from "express";

const app = express();

app.get("/register", (req, resp) => {
  let { username, email } = req.query;
  console.log(username, email);
  resp.send("welcome to", { username, email });
});
app.post("/register", (req, resp) => {
  let { username, email } = req.body;
  console.log(username);
  resp.send(`post request ${username}`);
});

const port = 3333;
app.listen(port, () => {
  console.log("server is started");
});
