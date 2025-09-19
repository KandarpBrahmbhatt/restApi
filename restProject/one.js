const express = require("express");
// const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
// app.use("*", cors()); // badha user ne allow kare aetale * lakhiyu 6e .

app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("Api is running");
});

app.get("/client", async (req, resp) => {
  try {
    const Product = await Product.find(req.body);
    resp.status(200).json(Product);
  } catch (error) {
    resp.status(500).json({ message: error.message });
  }
});
app.post("/client", async (req, resp) => {
  try {
    const Product = await Product.create(req.body);
    resp.status(200).json(Product);
  } catch (error) {
    resp.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://brahmbhattkandarp64_db_user:GObTeLIjmhD3a6G6@backenddb.8sk6dnc.mongodb.net/nodeJS-API?retryWrites=true&w=majority&appName=BackendDB",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log(err);
    console.log("Connection failed");
  });

const port = 6101;
app.listen(port, () => {
  console.log("Api is running");
});
