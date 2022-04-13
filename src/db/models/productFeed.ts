 import * as crypto from "crypto"
import Domain from "./domain"
import { Optional, Model, DataTypes } from "sequelize"
import { sequelizeConnection } from "../config"

interface ProductFeedAttributes {
    id : string
    cid : string
    name : string
    owner : string
    parentID : string | null
    statusID: number
    typeID: number
    lookupKeys: string | null
    domainID: string
    virtualKey: string | null
    rows: string | null
    createdAt?: Date
    updatedAt? : Date
}

export interface ProductFeedInput extends Optional<ProductFeedAttributes,"id">{}

export interface ProductFeedOutput extends Required<ProductFeedAttributes>{}

class ProductFeed extends Model<ProductFeedAttributes,ProductFeedInput> implements ProductFeedAttributes{
    public id! : string
    public cid! : string
    public name! : string
    public owner!: string
    public parentID!: string | null
    public statusID!: number
    public typeID!: number
    public lookupKeys!: string | null
    public domainID!: string
    public virtualKey!: string | null
    public rows!: string| null

    public readonly createdAt!: Date 
    public readonly updatedAt!: Date 
}

ProductFeed.init({
    id: {
        type: DataTypes.STRING,
        defaultValue : crypto.randomUUID(),
        primaryKey: true
    },
    cid: {
        type: DataTypes.STRING,
        defaultValue : crypto.randomUUID(),
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    owner: {
        type: DataTypes.STRING,
        defaultValue : crypto.randomUUID(),
        allowNull: false,
    },
    parentID: {
        type: DataTypes.STRING,
        defaultValue : crypto.randomUUID(),
        allowNull: true,
    },
    statusID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    typeID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    lookupKeys: {
        type: DataTypes.STRING,
        allowNull: true
    },
    domainID: {
        type: DataTypes.STRING,
        references: {
            model: Domain,
            key: "id"
        }
    },
    virtualKey: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rows: {
        type: DataTypes.STRING,
        allowNull: true
    },
},{
    sequelize: sequelizeConnection,
})

ProductFeed.belongsTo(Domain)

export default ProductFeed