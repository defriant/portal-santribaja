import { xhr } from "../config"

export const getGalleriesApi = async () => {
    try {
        const res = await xhr().get('/galleries')

        if (!res.data.error) {
            return res.data
        }
        throw res.data.message
    } catch (error) {
        throw error
    }
}