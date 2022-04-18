import { Router } from "express";
import * as productFeedDal from "../../db/dal/productFeed";

export const productFeedRouter = Router()


productFeedRouter.get("/feed/",() => {
    productFeedDal.getAllProductFeed().then(productFeeds => productFeeds)
})


productFeedRouter.get("/feed/:id",(req) => {
    productFeedDal.findById(req.params.id).then(productFeed => productFeed)
})

