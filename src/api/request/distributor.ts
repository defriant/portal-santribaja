import { xhr } from "../config"

export const getDistributorsApi = async () => {
    try {
        const res = await xhr().get('/distributors')

        if (!res.data.error) {
            return res.data
        }
        throw res.data.message
    } catch (error) {
        throw error
    }
}