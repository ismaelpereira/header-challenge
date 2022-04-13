import express, { Application } from "express";
import { getAllDomains } from "./db/dal/domain";

const app : Application = express()
const port = 4000

app.use(express.json())

app.listen(port,() => {
    console.log("API Listening on port 4000")
})


