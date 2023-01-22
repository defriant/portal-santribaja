import React from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Products from './components/Products'
import Album from './components/Album'
import Article from './components/Article'
import Grid2 from './components/Grid2'
import Grid3 from './components/Grid3'
import Category from './components/Category'
import ContactUs from './components/ContactUs'
import { Flex } from '@chakra-ui/react'

const Home = () => {
    return (
        <Flex direction='column'>
            <Hero />
            <Flex marginTop='calc(100vh - 67px)' />
            {/* <Category /> */}
            <Grid2 
                firstGrid='https://studio.syifaaviglowing.com/assets/images/banner_grid_2-1647493944-VV125.jpeg' 
                secondGrid='https://studio.syifaaviglowing.com/assets/images/banner_grid_2-1647493953-kP4t2.jpeg'
            />
            <Gallery />
            <Products />
            <Grid3
                firstGrid='https://studio.syifaaviglowing.com/assets/images/banner_grid_3-1653985614-Rp1B7.jpeg'
                secondGrid='https://studio.syifaaviglowing.com/assets/images/banner_grid_3-1653985622-QdDU3.jpeg'
                thirdGrid='https://studio.syifaaviglowing.com/assets/images/banner_grid_3-1653985631-q61l3.jpeg'
            />
            <Album />
            <Article />
            {/* <ContactUs /> */}
        </Flex>
    )
}

export default Home