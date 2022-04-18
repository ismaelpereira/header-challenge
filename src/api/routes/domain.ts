import { Router } from "express";
import * as domainDal from "../../db/dal/domain";

 const domainRoutes = Router();

domainRoutes.use((req,res,next) => {
  console.log("Time: ", Date.now())
  next()
})

domainRoutes.get("/", (req,res) => {
  res.send({
    message: "Hello Domain"
  })
  // domainDal.getAllDomains().then((domains) => domains);
});

domainRoutes.get("/:id", (req,res) => {
    domainDal.findById(req.params.id).then(domain => domain)
});

export default domainRoutes