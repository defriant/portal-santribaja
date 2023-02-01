import React from 'react'
import CategoryItem from './CategoryItem'
import { Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react'
import { Wrapper } from '../../../components'

interface ICategory {
    data: any
}

const Category = (props: ICategory) => {
    const { data } = props

    return (
        <Wrapper>
            <Stack spacing='1.5rem'>
                <Heading fontFamily='Poppins' color='primary.50' textAlign='center'>Kategori</Heading>
                <Text color='gray.600'>{data.description}</Text>
                {/* <Grid 
                    templateColumns={{
                        base: 'repeat(2, 200px)',
                        sm: 'repeat(3, 250px)',
                        md: `repeat(${data?.data?.length < 3 ? data?.data?.length : '3'}, 250px)`,
                        lg: `repeat(${data?.data?.length < 3 ? data?.data?.length : '3'}, 250px)`,
                    }} 
                    gap={{ base: '10px' }}
                    justifyItems='center'
                    alignItems='center'
                    justifyContent='center'
                    // width={{ base: '100%', md: '665px' }}
                    // marginX='auto'
                >
                    {data?.data?.map((category: any, index: number) => {
                        return <CategoryItem key={index} image={category.image} name={category.name} id={category.id} />
                    })}
                </Grid> */}
                <Flex gap={{ base: '10px', md: '20px' }} flexWrap='wrap' justifyContent='center'>
                    {data?.data?.map((category: any, index: number) => {
                        return <CategoryItem key={index} image={category.image} name={category.name} id={category.id} />
                    })}
                </Flex>
            </Stack>
        </Wrapper>
    )
}

export default Category