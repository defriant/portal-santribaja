import { xhr } from "../config"

export const getHomeDataApi = async () => {
    try {
        const res = await xhr().get('/home')
        console.log(res)

        if (!res.data.error) {
            return res.data
        }
        throw res.data.message
    } catch (error) {
        throw error
    }
}