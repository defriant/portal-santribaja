import React from 'react'
import ROUTE_URL from './urlRouter'
import Article from '../pages/Article/Article'
import Gallery from '../pages/Gallery/Gallery'
import Album from '../pages/Album/Album'
import About from '../pages/About/About'
import Distributor from '../pages/Distributor/Distributor'
import Product from '../pages/Product/Product'
import { MainLayout } from '../layouts'
import { Home } from '../pages'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail/ProductDetail'
import ArticleDetail from '../pages/ArticleDetail/ArticleDetail'
import ErrorPage from '../pages/ErrorPage'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path={ROUTE_URL.HOME} element={<Home />} />
                <Route path={ROUTE_URL.ARTICLE} element={<Article />} />
                <Route path={ROUTE_URL.GALLERY} element={<Gallery />} />
                <Route path={ROUTE_URL.ALBUM} element={<Album />} />

                <Route path={ROUTE_URL.ABOUT} element={<About />} />
                {/* <Route path={ROUTE_URL.DISTRIBUTOR} element={<Distributor />} /> */}
                <Route path={ROUTE_URL.PRODUCT} element={<Product />} />

                <Route path={ROUTE_URL.PRODUCT_DETAIL} element={<ProductDetail />} />
                <Route path={ROUTE_URL.ARTICLE_DETAIL} element={<ArticleDetail />} />
            </Route>
            <Route path='/*' element={<ErrorPage code={404} message='Halaman tidak ditemukan' />} />
        </Routes>
    )
}

export default Router