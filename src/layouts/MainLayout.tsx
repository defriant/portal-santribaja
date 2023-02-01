import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Footer, Navbar } from '../components'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <Flex direction='column' width='100%'>
            <Navbar />
            <Box height='66.89px' />
            <Outlet />
            <Footer />
        </Flex>
    )
}

export default MainLayout