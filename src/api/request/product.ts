import { xhr } from "../config"

interface IGetProduct {
    id_category?: any
}

interface IGetProductDetail {
    id: string
}

export const getProductsAPi = async (props: IGetProduct) => {
    try {
        const res = await xhr().get('/products', {
            params: props.id_category ? { c_id: props.id_category } : {}
        })

        if (!res.data.error) {
            return res.data
        }
        throw res.data.message
    } catch (error) {
        throw error
    }
}

export const getProductDetailApi = async (props: IGetProductDetail) => {
    try {
        const res = await xhr().get(`/products/${props?.id}`)

        if (!res.data.error) {
            return res.data
        }
        throw res.data.message
    } catch (error) {
        throw error
    }
}