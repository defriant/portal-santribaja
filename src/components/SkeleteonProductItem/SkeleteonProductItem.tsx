import React from 'react'
import { AspectRatio, Flex, GridItem, Skeleton } from '@chakra-ui/react'

const SkeleteonProductItem = () => {
    return (
        <Flex 
            direction='column' 
            as={GridItem}
            boxShadow='0px 0px 10px 1px #e8e8e8'
            rounded='md'
            cursor='pointer'
        >
            <AspectRatio width='100%' ratio={1}>
                <Skeleton height='100%' width='100%'  />
            </AspectRatio>
            <Flex direction='column' padding='10px' gap='5px'>
                <Skeleton height='24px' width='100%' />
            </Flex>
        </Flex>
    )
}

export default SkeleteonProductItem