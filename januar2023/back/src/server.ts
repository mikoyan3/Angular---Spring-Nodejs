import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter";
//import productRouter from "./routers/product.router";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/newDB");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("db connection ok");
});



const router = express.Router();
router.use("/users", userRouter);
//router.use("/products", productRouter)

app.use("/", router);
app.listen(4000, () => console.log(`Express server running on port 4000`));