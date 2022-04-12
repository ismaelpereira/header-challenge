import { Model, Optional } from "sequelize/types"


interface ProductDetailsAttributes{
    id : string
    referenceId : string
    SKU: string
    groupId : string
    name : string
    type: string
    categories: string[]
    brand : string
    description : string | null
    url : string
    price : number
    imgUrl : string
    inStock: boolean
    keywords:  string[]
    displayPrice : string
    gender : string
    surface : string
    bestFor : string[]
    colors : string[]
    cushioning : string
    support : string
    lng_enUS_name : string
    lng_enUS_inStock : boolean
    lng_enUS_url : string
    lng_enUS_imgUrl : string
    lng_enUS_displayPrice : string
    lng_enGB_name : string
    lng_enGB_inStock : boolean
    lng_enGB_url : string
    lng_enGB_imgUrl : string
    lng_enGB_displayPrice : string
    lng_frFR_name: string
    lng_frFR_inStock : string
    lng_frFR_url : string
    lng_frFR_imgUrl : string
    lng_frFR_displayPrice : string
    lng_deDE_name : string
    lng_deDE_inStock : boolean
    lng_deDE_url : string
    lng_deDE_imgUrl : string
    lng_deDE_displayPrice : string
}

export interface ProductDetailsInput extends Optional<ProductDetailsAttributes,"id">{}

export interface ProductDetailsOutput extends Required<ProductDetailsAttributes>{}

class ProductDetails extends Model<ProductDetailsAttributes,ProductDetailsInput> implements ProductDetailsAttributes{

}

export default ProductDetails