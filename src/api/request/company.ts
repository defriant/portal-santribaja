import { xhr } from "../config"

export const getCompanyInformationApi = async () => {
    try {
        const res = await xhr().get('/company')
        console.log(res)
        
        if (!res.data.error) {
            return res.data
        }
        throw res.data.message
    } catch (error) {
        throw error
    }
}