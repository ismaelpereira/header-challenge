import { Model, Optional } from "sequelize/types"
import { sequelizeConnection } from "../config"


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
    lng_frFR_inStock : boolean
    lng_frFR_url : string
    lng_frFR_imgUrl : string
    lng_frFR_displayPrice : string
    lng_deDE_name : string
    lng_deDE_inStock : boolean
    lng_deDE_url : string
    lng_deDE_imgUrl : string
    lng_deDE_displayPrice : string
    createdAt?: Date
    updatedAt?: Date
}

export interface ProductDetailsInput extends Optional<ProductDetailsAttributes,"id">{}

export interface ProductDetailsOutput extends Required<ProductDetailsAttributes>{}

class ProductDetails extends Model<ProductDetailsAttributes,ProductDetailsInput> implements ProductDetailsAttributes{
    public id!:string
    public referenceId!: string
    public SKU!: string
    public groupId!: string
    public name! : string
    public type!: string
    public categories! : string[]
    public brand!: string
    public description!: string | null
    public url!: string
    public price!: number
    public imgUrl!: string
    public inStock!: boolean
    public keywords!: string[]
    public displayPrice!: string
    public gender!: string
    public surface!: string
    public bestFor!: string[]
    public colors! : string[]
    public cushioning!: string
    public support! : string
    public lng_enUS_name!: string
    public lng_enUS_inStock!: boolean
    public lng_enUS_url!: string
    public lng_enUS_imgUrl!: string
    public lng_enUS_displayPrice!: string
    public lng_enGB_name!: string
    public lng_enGB_inStock!: boolean
    public lng_enGB_url!: string
    public lng_enGB_imgUrl!: string
    public lng_enGB_displayPrice!: string
    public lng_frFR_name!: string
    public lng_frFR_inStock!: boolean
    public lng_frFR_url!: string
    public lng_frFR_imgUrl!: string
    public lng_frFR_displayPrice!: string
    public  lng_deDE_name!: string
    public lng_deDE_inStock!: boolean
    public lng_deDE_url!: string
    public lng_deDE_imgUrl!: string
    public lng_deDE_displayPrice!: string
    public readonly createdAt!: Date 
    public readonly updatedAt!: Date 
}

ProductDetails.init({
    id: {

    },
    referenceId: {},
    SKU: {},
    groupId: {},
    name: {},
    type: {},
    categories:{},
    brand:{},
    description:{},
    url:{},
    price:{},
    imgUrl:{},
    inStock:{},
    keywords:{},
    displayPrice:{},
    gender:{},
    surface:{},
    bestFor:{},
    colors:{},
    cushioning:{},
    support:{},
    lng_enUS_name:{},
    lng_enUS_inStock:{},
    lng_enUS_url:{},
    lng_enUS_imgUrl:{},
    lng_enUS_displayPrice:{},
    lng_enGB_name:{},
    lng_enGB_inStock:{},
    lng_enGB_url:{},
    lng_enGB_imgUrl:{},
    lng_enGB_displayPrice:{},
    lng_frFR_name:{},
    lng_frFR_inStock:{},
    lng_frFR_url:{},
    lng_frFR_imgUrl:{},
    lng_frFR_displayPrice:{},
    lng_deDE_name:{},
    lng_deDE_inStock:{},
    lng_deDE_url:{},
    lng_deDE_imgUrl:{},
    lng_deDE_displayPrice:{},
},{
    sequelize: sequelizeConnection
})

export default ProductDetails