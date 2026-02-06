const express = require("express");
const cors = require("cors");
const productRouter = require("./Routes/productRoutes");
const app = express();
const mongoose=require("mongoose")
const dotenv = require("dotenv");
dotenv.config({ path: "./.config.env" });
app.use(express.json());
console.log(process.env.DB);

app.use(cors());
mongoose.connect(process.env.DB).then(()=> {
  console.log("db connected successfully");
})
.catch((err)=>{
console.log(err);

});

app.use((req, res, next) => {
  const now = new Date();
  req.requestTimeOfHit = now.toLocaleString();
  next();
});

app.use("/api/v1/products", productRouter);

module.exports = app