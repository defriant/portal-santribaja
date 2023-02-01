import React from 'react'
import CategoryItem from './CategoryItem'
import { Flex, Grid, Heading } from '@chakra-ui/react'

interface ICategory {
    data: any
}

const Category = (props: ICategory) => {
    const { data } = props

    return (
        <Flex direction='column' paddingY='50px'>
            <Heading fontFamily='Poppins' color='primary.50' textAlign='center'>Kategori</Heading>
            <Grid 
                templateColumns={{
                    base: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
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
                {data?.map((category: any, index: number) => {
                    return <CategoryItem key={index} image={category.image} name={category.name} id={category.id} />
                })}
            </Grid>
        </Flex>
    )
}

export default Category