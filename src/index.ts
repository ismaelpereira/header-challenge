import express, { Application } from "express";
import router from "./api/routes/index";
import { populateDomain } from "./db/scripts/populateDomain";


const app = express();
const port = 4000;

app.use(express.json());
app.use(router)
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res) => {
  return res.status(200).send({
    message: "API IS RUNNING",
  })
})

app.listen(port, () => {
  console.log("API Listening on port 4000");
});











