import * as crypto from "crypto"
import * as domainDal from  "../dal/domain"

export const populateDomain = () => {
    domainDal.create({
        id: crypto.randomUUID(),
        cid: crypto.randomUUID(),
        domain: "https://www.headerinteractive.com/",
        createdAt: new Date(),
        updatedAt: new Date(),
    })
}


