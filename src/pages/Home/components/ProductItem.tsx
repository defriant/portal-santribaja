import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { Flex, Image, Text, Icon, GridItem } from '@chakra-ui/react'

interface IProductItem {
    image: string
    name: string
    rating: number
}

const ProductItem = (props: IProductItem) => {
    const { image, name } = props

    const [isHover, setIsHover] = useState(false)

    return (
        <Flex 
            direction='column' 
            as={GridItem}
            boxShadow='0px 0px 10px 1px #e8e8e8'
            rounded='md'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            cursor='pointer'
        >
            <Image 
                src={image} 
                width='100%' 
                objectFit='cover' 
                transition='.3s'
                transform={isHover ? 'scale(1.05, 1.05)' : 'scale(1, 1)'}
            />
            <Flex direction='column' padding='10px' gap='5px'>
                <Text>{name}</Text>
            </Flex>
        </Flex>
    )
}

export default ProductItem