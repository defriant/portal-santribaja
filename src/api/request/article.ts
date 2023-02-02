import { xhr } from "../config"

interface IGetArticleDetail {
    id: any
}

export const getArticlesApi = async () => {
    try {
        const res = await xhr().get('/articles')

        if (!res.data.error) {
            return res.data
        }
        throw res.data.message
    } catch (error) {
        throw error
    }
}

export const getArticleDetailApi = async (props: IGetArticleDetail) => {
    try {
        const res = await xhr().get(`/articles/${props.id}`)

        if (!res.data.error) {
            return res.data
        }
        throw res.data.message
    } catch (error) {
        throw error
    }
}