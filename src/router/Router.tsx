import React from 'react'
import { MainLayout } from '../layouts'
import { Home } from '../pages'
import { Routes, Route } from 'react-router-dom'
import ContactUs from '../pages/ContactUs/ContactUs'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/hubungi-kami' element={<ContactUs />} />
            </Route>
        </Routes>
    )
}

export default Router