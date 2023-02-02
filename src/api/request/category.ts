import { xhr } from "../config"

export const getCategoriesApi = async () => {
    try {
        const res = await xhr().get('/categories')
        console.log(res)

        if (!res.data.error) {
            return res.data
        }
        throw res.data.message
    } catch (error) {
        throw error
    }
}