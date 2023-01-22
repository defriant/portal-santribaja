import React from 'react'
import { Container, Flex } from '@chakra-ui/react'
import { Footer, Navbar } from '../components'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <Flex direction='column' width='100%'>
            <Navbar />
            <Container 
                maxW='6xl' 
                padding='0px' 
                minHeight='calc(100vh - 67px)'
                marginBottom='3rem'
            >
                <Outlet />
            </Container>
            <Footer />
        </Flex>
    )
}

export default MainLayout