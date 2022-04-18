import { Router } from "express";
import * as productDetailsDal from "../../db/dal/productDetails";

export const productDetailsRouter = Router()


productDetailsRouter.get("/product",(req,res) => {
    productDetailsDal.getAllProductDetails().then((productDetails) => productDetails);
})


productDetailsRouter.get("/product/:id",(req) => {
    productDetailsDal.findById(req.params.id).then(productDetails => productDetails)
})

