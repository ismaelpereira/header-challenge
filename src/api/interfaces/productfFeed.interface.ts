export interface ProductFeed {
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