import * as crypto from "crypto"
import { Optional,Model, DataTypes } from "sequelize"
import { sequelizeConnection } from "../config"


interface DomainAttributes {
    id: string
    cid : string
    domain : string
    createdAt?:Date;
    updatedAt?:Date;
}

export interface DomainInput extends Optional<DomainAttributes,"id">{}

export interface DomainOutput extends Required<DomainAttributes>{}

class Domain extends Model<DomainAttributes,DomainInput> implements DomainAttributes {
    public id! : string
    public cid! : string
    public domain!: string

    public readonly createdAt!: Date 
    public readonly updatedAt!: Date 
}


Domain.init({
    id: {
        type : DataTypes.STRING,
        primaryKey: true,
    },
    cid: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    domain:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: sequelizeConnection,
    paranoid: true
  })

export default Domain