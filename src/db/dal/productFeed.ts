import { ProductFeedInput, ProductFeedOutput } from "../models/productFeed"
import { ProductFeed } from "../models"

export const create = async (payload : ProductFeedInput) : Promise<ProductFeedOutput> => {
    const productFeed = await ProductFeed.create(payload)
    return productFeed
}

export const update = async(id: string, payload : Partial<ProductFeedInput>): Promise<ProductFeedOutput> => {
    const productFeed = await ProductFeed.findByPk(id)
    if (!productFeed){
        throw new Error('product feed not found')
    }
    const updatedProductFeed = await (productFeed as ProductFeed).update(payload)
    return updatedProductFeed
}

export const deleteById = async (id : string): Promise<boolean> => {
    const deletedProductFeed = await ProductFeed.destroy({
        where:{id}
    })
    return !!deletedProductFeed
}

export const findById = async(id: string): Promise<ProductFeedOutput> => {
    const productFeed = await ProductFeed.findByPk(id)

    if(!productFeed){
        throw new Error('product feed  not found')
    }

    return productFeed
}

export const getAllProductFeed = async (): Promise<ProductFeedOutput[]> => {
    return ProductFeed.findAll()
}