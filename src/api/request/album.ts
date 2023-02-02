import { xhr } from "../config"

export const getAlbumsApi = async () => {
    try {
        const res = await xhr().get('/albums')
        
        if (!res.data.error) {
            return res.data
        }
        throw res.data.message
    } catch (error) {
        throw error
    }
}