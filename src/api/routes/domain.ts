import { Router } from "express";
import * as domainDal from "../../db/dal/domain";
const domainRoutes = Router();

domainRoutes.get("/domain", () => {
  domainDal.getAllDomains().then((domains) => domains);
});

domainRoutes.get("/domain/:id", (req,res) => {
    domainDal.findById(req.params.id).then(domain => domain)
});
