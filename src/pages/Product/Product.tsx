import React, { useMemo } from 'react'
import { Wrapper } from '../../components'
import { Flex, Grid, Heading } from '@chakra-ui/react'
import ProductItem from '../Home/components/ProductItem'

const Product = () => {
    const dummyProducts = useMemo(() => [
        {
            name: 'Herbal Soap',
            image: 'https://studio.syifaaviglowing.com/assets/images/product-1647320201-E2r3C.jpeg',
            rating: 5,
        },
        {
            name: 'Honey Bidara Soap',
            image: 'https://studio.syifaaviglowing.com/assets/images/product-1647320161-ITgf6.jpeg',
            rating: 5,
        },
        {
            name: 'Day Cream',
            image: 'https://studio.syifaaviglowing.com/assets/images/product-1647330848-f64nH.jpeg',
            rating: 5,
        },
        {
            name: 'Night Cream',
            image: 'https://studio.syifaaviglowing.com/assets/images/product-1647330971-UDs4B.jpeg',
            rating: 5,
        },
        {
            name: 'Herbal Body Wash',
            image: 'https://studio.syifaaviglowing.com/assets/images/product-1647330567-KEIKs.jpeg',
            rating: 5,
        },
        {
            name: 'Honey Bidara Body Wash',
            image: 'https://studio.syifaaviglowing.com/assets/images/product-1647330459-u73W2.jpeg',
            rating: 5,
        },
    ], [])

    return (
        <Wrapper>
            <Flex direction='column' minHeight='calc(100vh - 117px)'>
                <Heading 
                    color='primary' 
                    textAlign='center' 
                    marginBottom='30px'
                >
                    Our Product
                </Heading>
                <Grid 
                    templateColumns={{
                        base: 'repeat(2, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    }} 
                    paddingY='25px' 
                    gap='20px'
                >
                    {dummyProducts?.map((product, index) => {
                        return <ProductItem key={index} image={product.image} name={product.name} rating={product.rating} />
                    })}
                </Grid>
            </Flex>
        </Wrapper>
    )
}

export default Product