import { ProductDetailsInput, ProductDetailsOutput } from "../models/productDetails"
import { ProductDetails } from "../models"

export const create = async (payload : ProductDetailsInput) : Promise<ProductDetailsOutput> => {
    const productDetails = await ProductDetails.create(payload)
    return productDetails
}

export const update = async(id: string, payload : Partial<ProductDetailsInput>): Promise<ProductDetailsOutput> => {
    const productDetails = await ProductDetails.findByPk(id)
    if (!productDetails){
        throw new Error('product details not found')
    }
    const updatedProducDetails = await (productDetails as ProductDetails).update(payload)
    return updatedProducDetails
}

export const deleteById = async (id : string): Promise<boolean> => {
    const deletedProductDetails = await ProductDetails.destroy({
        where:{id}
    })
    return !!deletedProductDetails
}

export const findById = async(id: string): Promise<ProductDetailsOutput> => {
    const productDetails = await ProductDetails.findByPk(id)

    if(!productDetails){
        throw new Error('product details not found')
    }

    return productDetails
}

export const getAllProductDetails = async (): Promise<ProductDetailsOutput[]> => {
    return ProductDetails.findAll()
}