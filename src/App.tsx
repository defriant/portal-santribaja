import Router from './router/Router'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const App = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return <Router />
}

export default App
