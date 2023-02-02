import { xhr } from "../config"

export const getCompanyInformationApi = async () => {
    try {
        const res = await xhr().get('/company')

        if (!res.data.error) {
            return res.data
        }
        throw res.data.message
    } catch (error) {
        throw error
    }
}