import axios from 'axios'

const xhr = () => {
    const config = {
        baseURL: process.env.REACT_APP_API_BASE_URL,
    }

    return axios.create(config)
}

export {
    xhr
}