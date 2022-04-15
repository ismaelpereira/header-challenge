import { Router } from "express";
import * as productFeedDal from "../../db/dal/productFeed";

const productFeed = Router()


productFeed.get("domain/feed/",() => {
    productFeedDal.getAllProductFeed().then(productFeeds => productFeeds)
})


productFeed.get("domain/feed/:id",(req) => {
    productFeedDal.findById(req.params.id).then(productFeed => productFeed)
})

