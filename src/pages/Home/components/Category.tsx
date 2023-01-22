import React, { useMemo } from 'react'
import CategoryItem from './CategoryItem'
import { Flex, Grid, Heading } from '@chakra-ui/react'

const Category = () => {
    const dummyCategory = useMemo(() => [
        {
            image: 'https://www.gunungrajapaksi.com/upload/image_diyya/products.jpg',
            name: 'Produk',
        },
        {
            image: 'https://www.gunungrajapaksi.com/upload/image_diyya/services.jpg',
            name: 'Layanan',
        },
        {
            image: 'https://www.gunungrajapaksi.com/upload/image_diyya/projects.jpg',
            name: 'Projek',
        },
    ], [])

    return (
        <Flex direction='column' paddingY='50px'>
            <Heading fontFamily='Poppins' color='primary.50' textAlign='center'>Kategori</Heading>
            <Grid 
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(1, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(3, 1fr)',
                }} 
                paddingX='20px'
                paddingY='25px' 
                gap={{ base: '10px' }}
                justifyItems='center'
                alignItems='center'
                // width={{ base: '100%', md: '665px' }}
                marginX='auto'
            >
                {dummyCategory?.map((category, index) => {
                    return <CategoryItem key={index} image={category.image} name={category.name} />
                })}
            </Grid>
        </Flex>
    )
}

export default Category