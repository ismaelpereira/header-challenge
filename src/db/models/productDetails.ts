import { DataTypes, Model, Optional } from "sequelize"
import { sequelizeConnection } from "../config"
import ProductFeed from "./productFeed"


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
        type: DataTypes.STRING,
        primaryKey: true,
    },
    referenceId: {
        type: DataTypes.STRING,
        allowNull: false,    
        references: {
            model: ProductFeed,
            key: "id"
        }
    },
    SKU: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    groupId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categories:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    brand:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    url:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    imgUrl:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    inStock:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    keywords:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    displayPrice:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender:{ type: DataTypes.STRING,
        allowNull: false,},
    surface:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    bestFor:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    colors:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    cushioning:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    support:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_enUS_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_enUS_inStock:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    lng_enUS_url:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_enUS_imgUrl:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_enUS_displayPrice:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_enGB_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_enGB_inStock:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    lng_enGB_url:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_enGB_imgUrl:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_enGB_displayPrice:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_frFR_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_frFR_inStock:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    lng_frFR_url:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_frFR_imgUrl:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_frFR_displayPrice:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_deDE_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_deDE_inStock:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    lng_deDE_url:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_deDE_imgUrl:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lng_deDE_displayPrice:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    sequelize: sequelizeConnection
})

ProductDetails.belongsTo(ProductFeed)

export default ProductDetails