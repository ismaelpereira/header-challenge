import express, { Application } from "express";
import { populateDomain } from "./db/scripts/populateDomain";
import * as domainDal from  "./db/dal/domain"

const app : Application = express()
const port = 4000

app.use(express.json())

app.listen(port,() => {
    console.log("API Listening on port 4000")
})

populateDomain()
const domain = domainDal.getAllDomains()
console.log(domain)