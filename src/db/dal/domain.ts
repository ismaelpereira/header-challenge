import { Domain } from "../models";
import { DomainInput, DomainOutput } from "../models/domain";

export const create = async (payload : DomainInput) : Promise<DomainOutput> => {
    const domain = await Domain.create(payload)
    return domain
}

export const update = async(id: string, payload : Partial<DomainInput>): Promise<DomainOutput> => {
    const domain = await Domain.findByPk(id)
    if (!domain){
        throw new Error('domain not found')
    }
    const updatedDomain = await (domain as Domain).update(payload)
    return updatedDomain
}

export const deleteById = async (id : string): Promise<boolean> => {
    const deletedDomain = await Domain.destroy({
        where:{id}
    })
    return !!deletedDomain
}

export const findById = async(id: string): Promise<DomainOutput> => {
    const domain = await Domain.findByPk(id)

    if(!domain){
        throw new Error('domain not found')
    }

    return domain
}

export const getAllDomains = async (): Promise<DomainOutput[]> => {
    return Domain.findAll()
}
