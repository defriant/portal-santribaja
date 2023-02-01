import { xhr } from "../config"

interface ISendContact {
    name: string
    phone: string
    email: string
    message: string
}

export const sendContactApi = async (props: ISendContact) => {
    try {
        const res = await xhr().post('/contact/send', {...props})
        
        if (!res.data.error) {
            return res.data
        }
        throw res.data.message
    } catch (error) {
        throw error
    }
}