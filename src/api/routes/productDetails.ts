import { Router } from "express";
import * as productDetailsDal from "../../db/dal/productDetails";

const productDetails = Router()


productDetails.get("domain/feed/product",() => {
    productDetailsDal.getAllProductDetails().then((productDetails) => productDetails);
})


productDetails.get("domain/feed/product/:id",(req) => {
    productDetailsDal.findById(req.params.id).then(productDetails => productDetails)
})

