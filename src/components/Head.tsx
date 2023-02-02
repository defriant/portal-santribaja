import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import ROUTE_URL from '../router/urlRouter'

function Head(props: { title: any }) {
    const { pathname } = useLocation()
    const { title } = props

    const Title = pathname === ROUTE_URL.HOME ? title : `${title} - ${process.env.REACT_APP_NAME}`

    return (
        <Helmet>
            {title && <title>{Title}</title>}
        </Helmet>
    )
}

export default Head