import { Flex, GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'

interface ICategoryItem {
    image: string
    name: string
}

const CategoryItem = (props: ICategoryItem) => {
    const { image, name } = props

    return (
        <Flex 
            as={GridItem}
            direction='column'
            height={{ base: '540px', md: '540px' }}
            width={{ base: '100%', md: '360px' }}
            backgroundColor='black'
            position='relative'
            justifyContent='center'
            alignItems='center'
        >
            <Image 
                src={image} 
                height='100%' 
                width='100%' 
                objectFit='cover' 
                opacity='0.5' 
            />
            <Heading 
                position='absolute'
                color='white'
            >
                {name}
            </Heading>
        </Flex>
    )
}

export default CategoryItem