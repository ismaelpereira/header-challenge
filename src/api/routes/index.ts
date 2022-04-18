import { Router } from "express";
import  domainRoutes  from "./domain";
import { productFeedRouter } from "./productFeed";
import { productDetailsRouter } from "./productDetails";

const router = Router()

router.use("/domain",domainRoutes)
router.use("/feed",productFeedRouter)
router.use("/product",productDetailsRouter)

export default router