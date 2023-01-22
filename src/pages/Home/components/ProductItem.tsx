import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Flex, Image, Text, Icon, GridItem } from '@chakra-ui/react'

interface IProductItem {
    image: string
    name: string
    rating: number
}

const ProductItem = (props: IProductItem) => {
    const { image, name, rating } = props

    return (
        <Flex 
            direction='column' 
            as={GridItem}
            boxShadow='0px 0px 10px 1px #e8e8e8'
            rounded='md'
        >
            <Image src={image} height='263px' objectFit='cover' />
            <Flex direction='column' padding='10px' gap='5px'>
                <Text>{name}</Text>
                <Flex gap='5px'>
                    {[...Array(rating)].map((_, index) => {
                        return <Icon key={index} as={FaStar} color='#e0b257' /> 
                    })}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ProductItem